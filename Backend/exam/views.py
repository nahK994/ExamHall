from rest_framework import viewsets
from datetime import datetime, timedelta
from utils.mixins import ModelManagerMixin
from utils.constants import ExamEnrollmentStatus
from .models import ExamModel, ExamParticipantModel
from .serializers import ExamSerializer, ExamQuerySerializer, ExamEnrollmentSerializer
from rest_framework import status, permissions
from rest_framework.response import Response
import pytz

utc = pytz.UTC


class ExamViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = ExamSerializer
    query_serializer_class = ExamQuerySerializer
    queryset = ExamModel.objects.all()


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

        current_time = datetime.now()
        if current_time.date() > exam.date:
            return Response("can not enroll", status=status.HTTP_400_BAD_REQUEST)

        ExamParticipantModel.objects.create(
            user=request.user,
            exam=exam,
            status=ExamEnrollmentStatus.started,
            exam_start_time=current_time
        )

        return Response("exam started", status=status.HTTP_201_CREATED)


class EndExamViewset(viewsets.ModelViewSet):
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

        filtered_exam_participant_info = ExamParticipantModel.objects.filter(
            user=request.user,
            exam=exam
        )
        if not filtered_exam_participant_info:
            return Response("exam not started", status=status.HTTP_400_BAD_REQUEST)
        exam_participant_info = filtered_exam_participant_info[0]
        if exam_participant_info.status == ExamEnrollmentStatus.completed:
            return Response("exam is completed", status=status.HTTP_400_BAD_REQUEST)

        current_time = datetime.now()
        time_duration = timedelta(hours=exam.duration.hour, minutes=exam.duration.minute)
        if exam_participant_info.exam_start_time + time_duration < utc.localize(current_time):
            return Response("cannot submit exam", status=status.HTTP_400_BAD_REQUEST)

        filtered_exam_participant_info.update(
            exam_end_time=utc.localize(current_time),
            status=ExamEnrollmentStatus.completed
        )

        return Response("exam ended", status=status.HTTP_200_OK)
