from django.db.models import Sum
from rest_framework import viewsets
from datetime import datetime, timedelta

from user.models import UserModel
from .models import ResultModel
from question.models import QuestionModel, SubjectModel
from utils.mixins import ModelManagerMixin
from utils.constants import ExamEnrollmentStatus
from .models import ExamModel, ExamParticipantModel
from .serializers import ExamSerializer, ExamQuerySerializer, ExamEnrollmentSerializer, ResultSerializer, \
    RankListSerializer, EndExamSerializer, ExamListSerializer
from rest_framework import status, permissions
from rest_framework.response import Response
from zoneinfo import ZoneInfo
from django.db.models import Q
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


def get_all_user_email():
    users = UserModel.objects.all()
    email_list = []
    for user in users:
        if not user.is_admin:
            email_list.append(user.email)
    return email_list


class ExamViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = ExamSerializer
    retrieve_serializer_class = ExamQuerySerializer
    queryset = ExamModel.objects.all().order_by('-date')

    def create(self, request):
        if not request.user.is_admin:
            return Response("not allowed", status=status.HTTP_403_FORBIDDEN)
        request_data = request.data

        serialized_info = self.get_serializer(data=request_data)
        if serialized_info.is_valid():
            instance = serialized_info.save()

            html_content = render_to_string("email_notification.html", {
                "name": instance.name,
                "date": instance.date.strftime("%d-%m-%Y")
            })
            msg = EmailMultiAlternatives('Exam announcement', '', 'examhall95@gmail.com', get_all_user_email())
            msg.attach_alternative(html_content, "text/html")
            msg.send()

            return Response(self.retrieve_serializer_class(instance, context={"request": request}).data, status=status.HTTP_201_CREATED)

        validation_error = self.get_validation_errors(serialized_info)

        return Response(validation_error, status=status.HTTP_400_BAD_REQUEST)


class StartExamViewset(viewsets.ModelViewSet):
    http_method_names = ['post']
    serializer_class = ExamEnrollmentSerializer
    queryset = ExamParticipantModel.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):
        data = request.data
        exam_id = data.get('examId')
        filtered_exam = ExamModel.objects.filter(id=exam_id)
        if not filtered_exam:
            return Response("no such exam", status=status.HTTP_400_BAD_REQUEST)
        exam = filtered_exam[0]
        current_time = datetime.now(tz=ZoneInfo("Asia/Dhaka"))

        if current_time.date() != exam.date:
            return Response("can not enroll", status=status.HTTP_400_BAD_REQUEST)
        if ExamParticipantModel.objects.filter(user=request.user, exam=exam).exists():
            return Response("exam is completed", status=status.HTTP_400_BAD_REQUEST)

        ExamParticipantModel.objects.create(
            user=request.user,
            exam=exam,
            status=ExamEnrollmentStatus.started,
            exam_start_time=current_time
        )

        return Response("exam started", status=status.HTTP_201_CREATED)


class EndExamViewset(viewsets.ModelViewSet):
    http_method_names = ['post']
    serializer_class = EndExamSerializer
    queryset = ExamParticipantModel.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):
        data = request.data
        exam_id = data.get('examId')
        filtered_exam = ExamModel.objects.prefetch_related('question', 'question__chapter', 'question__chapter__subject').filter(id=exam_id)
        if not filtered_exam:
            return Response("no such exam", status=status.HTTP_400_BAD_REQUEST)
        exam = filtered_exam[0]

        filtered_exam_participant_info = ExamParticipantModel.objects.filter(
            user=request.user,
            exam=exam
        )
        if not filtered_exam_participant_info:
            return Response("exam not started", status=status.HTTP_400_BAD_REQUEST)
        exam_participant_info = filtered_exam_participant_info[0]
        if exam_participant_info.status == ExamEnrollmentStatus.completed:
            return Response("exam is completed", status=status.HTTP_400_BAD_REQUEST)

        current_time = datetime.now(tz=ZoneInfo("Asia/Dhaka"))
        buffer_time = 2
        time_duration = timedelta(hours=exam.duration.hour, minutes=exam.duration.minute,
                                  seconds=(exam.duration.second + buffer_time))
        exam_start_time = exam_participant_info.exam_start_time
        bdt_timezone = ZoneInfo("Asia/Dhaka")

        if exam_start_time.astimezone(bdt_timezone) + time_duration < current_time:
            return Response("cannot submit exam", status=status.HTTP_400_BAD_REQUEST)

        if ResultModel.objects.filter(user=request.user, exam__id=exam_id).exists():
            return Response("cannot take part in same exam", status=status.HTTP_400_BAD_REQUEST)

        answer_sheet = request.data['answerSheet']
        exam = ExamModel.objects.get(id=exam_id)

        subject_ids = []
        for q in exam.questions.all():
            if q.chapter.subject.id not in subject_ids:
                subject_ids.append(q.chapter.subject.id)

        topic_wise_result = {}
        for subject_id in subject_ids:
            topic_wise_result[subject_id] = UserDetailedResultInfo()

        number_for_correct_answer = exam.number_for_correct_answer
        number_for_incorrect_answer = exam.number_for_incorrect_answer
        for userAnswer in answer_sheet:
            question = QuestionModel.objects.get(id=userAnswer['questionId'])
            subject_id = question.subject.id
            if question.answer == userAnswer['answer']:
                topic_wise_result[subject_id].number_of_correct_answer += 1
                topic_wise_result[subject_id].marks += number_for_correct_answer
            else:
                topic_wise_result[subject_id].number_of_incorrect_answer += 1
                topic_wise_result[subject_id].marks += number_for_incorrect_answer

        for subject_id in subject_ids:
            result_info = ResultModel(
                exam=exam,
                user=request.user,
                subject=SubjectModel.objects.get(id=subject_id),
                number_of_correct_answer=topic_wise_result[subject_id].number_of_correct_answer,
                number_of_incorrect_answer=topic_wise_result[subject_id].number_of_incorrect_answer,
                marks=topic_wise_result[subject_id].marks
            )
            result_info.save()

        filtered_exam_participant_info.update(
            exam_end_time=current_time,
            status=ExamEnrollmentStatus.completed
        )

        return Response("exam ended", status=status.HTTP_201_CREATED)


class RankListViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, pk):
        serialized_rank_list = RankListSerializer(get_rank_list(pk), many=True)
        return Response(serialized_rank_list.data, status=status.HTTP_200_OK)


class ResultViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get']

    def retrieve(self, request, pk):
        filtered_exam = ExamModel.objects.filter(id=pk)
        if not filtered_exam:
            return Response("no such exam", status=status.HTTP_404_NOT_FOUND)
        exam = filtered_exam[0]

        result_info = ResultModel.objects.filter(exam=exam, user=request.user)
        rank_list = get_rank_list(pk)
        cut_mark = get_cut_marks(exam, rank_list)

        response = {
            "userResult": ResultSerializer(result_info, many=True).data,
            "cutMark": cut_mark,
            "rankList": RankListSerializer(rank_list, many=True).data
        }

        return Response(response, status=status.HTTP_200_OK)


class UserPendingExamListViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get']

    def list(self, request):
        user = request.user
        return Response(get_pending_exams(user), status=status.HTTP_200_OK)


class UserCompletedExamListViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get']

    def list(self, request):
        user = request.user
        return Response(get_completed_exams(user), status=status.HTTP_200_OK)


def get_completed_exams(user):
    exam_participation_info = ExamParticipantModel.objects.select_related('exam') \
        .filter(user=user, status=ExamEnrollmentStatus.completed)
    exam_ids = [item.exam.id for item in exam_participation_info]
    exam_list = ExamModel.objects.filter(id__in=exam_ids).order_by('-date')
    serialized_exam_list = ExamListSerializer(exam_list, many=True)
    return serialized_exam_list.data


def get_pending_exams(user):
    exam_participation_info = ExamParticipantModel.objects.select_related('exam') \
        .filter(user=user) \
        .filter(Q(status=ExamEnrollmentStatus.completed) | Q(status=ExamEnrollmentStatus.started))

    exam_ids = [item.exam.id for item in exam_participation_info]
    today_bd_date = datetime.now(tz=ZoneInfo("Asia/Dhaka")).date()
    exams_list = ExamModel.objects.exclude(id__in=exam_ids).filter(date__gte=today_bd_date).order_by('-date')

    serialized_exam_list = ExamListSerializer(exams_list, many=True)
    return serialized_exam_list.data


def get_rank_list(exam_id):
    rank_list = UserModel.objects.filter(resultmodel__exam__id=exam_id).annotate(
        total_marks=Sum('resultmodel__marks')).order_by('-total_marks')
    return rank_list


def get_cut_marks(exam, rank_list):
    if len(rank_list) > exam.number_of_seats:
        cut_mark = rank_list[exam.number_of_seats - 1].total_marks
    else:
        if len(rank_list):
            cut_mark = rank_list[len(rank_list) - 1].total_marks
        else:
            cut_mark = 0
    return cut_mark


class UserDetailedResultInfo:
    number_of_correct_answer: int = 0
    number_of_incorrect_answer: int = 0
    marks: int = 0
