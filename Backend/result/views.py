from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from user.models import UserModel
from topic.models import TopicModel

from question.models import QuestionModel
from exam.models import ExamModel
from exam.serializers import ExamSerializer

from .models import ResultModel
from .serializers import ResultSerializer
from django.db.models import Sum

from .serializers import RankListSerializer


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_all_user_rank(request, exam_id):
    serialized_rank_list = RankListSerializer(get_rank_list(exam_id), many=True)
    return Response(serialized_rank_list.data, status=status.HTTP_200_OK)


def get_rank_list(exam_id):
    rank_list = UserModel.objects.filter(resultmodel__exam__exam_id=exam_id).annotate(
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


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_result(request, exam_id):
    filtered_exam = ExamModel.objects.filter(exam_id=exam_id)
    if not filtered_exam:
        return Response("no such exam", status=status.HTTP_404_NOT_FOUND)
    exam = filtered_exam[0]

    result_info = ResultModel.objects.filter(exam=exam, user=request.user)
    rank_list = get_rank_list(exam_id)
    cut_mark = get_cut_marks(exam, rank_list)

    response = {
        "examInfo": ExamSerializer(exam).data,
        "cutMark": cut_mark,
        "userResult": ResultSerializer(result_info, many=True).data,
        "rankList": RankListSerializer(rank_list, many=True).data
    }

    return Response(response, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_result(request, exam_id):
    if ResultModel.objects.filter(user=request.user).exists():
        return Response("cannot take part in same exam", status=status.HTTP_400_BAD_REQUEST)

    answer_sheet = request.data['answerSheet']
    exam = ExamModel.objects.get(exam_id=exam_id)
    topic_ids = [topic.topic_id for topic in exam.topics.all()]

    topic_wise_result = {}
    for topic_id in topic_ids:
        topic_wise_result[topic_id] = UserDetailedResultInfo()

    number_for_correct_answer = exam.number_for_correct_answer
    number_for_incorrect_answer = exam.number_for_incorrect_answer
    for userAnswer in answer_sheet:
        question = QuestionModel.objects.get(question_id=userAnswer['questionId'])
        topic_id = question.topic.topic_id
        if question.answer == userAnswer['answer']:
            topic_wise_result[topic_id].number_of_correct_answer += 1
            topic_wise_result[topic_id].marks += number_for_correct_answer
        else:
            topic_wise_result[topic_id].number_of_incorrect_answer += 1
            topic_wise_result[topic_id].marks += number_for_incorrect_answer

    for topic_id in topic_ids:
        result_info = ResultModel(
            exam=exam,
            user=request.user,
            topic=TopicModel.objects.get(topic_id=topic_id),
            number_of_correct_answer=topic_wise_result[topic_id].number_of_correct_answer,
            number_of_incorrect_answer=topic_wise_result[topic_id].number_of_incorrect_answer,
            marks=topic_wise_result[topic_id].marks
        )
        result_info.save()

    return Response("created", status=status.HTTP_200_OK)


class UserDetailedResultInfo:
    number_of_correct_answer: int = 0
    number_of_incorrect_answer: int = 0
    marks: int = 0
