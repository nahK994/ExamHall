from ast import Return
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from user.models import UserModel
from topic.models import TopicModel
from topic.serializers import TopicSerializer

from question.models import QuestionModel
from exam.models import ExamModel

from .models import ResultModel
from .serializers import ResultSerializer
from django.db.models import Sum

from .serializers import RankListSerializer


@api_view(['GET'])
def getAllUserRank(request, exam_id):
    try:
        return Response(get_rank_list(exam_id), status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def get_rank_list(exam_id):
    rank_list = UserModel.objects.filter(userdetailedresultinfomodel__exam=exam_id).annotate(
        totalMarks=Sum('userdetailedresultinfomodel__totalMarks')).order_by('-totalMarks')
    serialized_rank_list = RankListSerializer(rank_list, many=True)
    return serialized_rank_list.data


def get_cut_marks(exam, rank_list):
    if len(rank_list) > exam.numberOfSeats:
        cut_mark = rank_list[exam.numberOfSeats - 1]['totalMarks']
    else:
        cut_mark = rank_list[len(rank_list) - 1]['totalMarks']
    return cut_mark


@api_view(['GET'])
def getUserResult(request, user_id, exam_id):
    try:
        rank_list = ResultModel.objects.filter(exam=exam_id, userId=user_id)
        if not rank_list:
            return Response(None, status=status.HTTP_200_OK)
        serializer = ResultSerializer(rank_list, many=True)

        user_result_info = []
        for data in serializer.data:
            topic = TopicModel.objects.get(topicId=data['topicId'])
            serialized_topic_data = TopicSerializer(topic)
            item = {
                "numberOfCorrectAnswer": data['numberOfCorrectAnswer'],
                "numberOfIncorrectAnswer": data['numberOfIncorrectAnswer'],
                "totalMarks": data['totalMarks'],
                "topic": serialized_topic_data.data
            }
            user_result_info.append(item)

            exam = ExamModel.objects.get(examId=exam_id)

            rank_list = get_rank_list(exam_id)

            cut_mark = get_cut_marks(exam, rank_list)

            response = {
                "examInfo": {
                    "numberForCorrectAnswer": exam.numberForCorrectAnswer,
                    "numberForIncorrectAnswer": exam.numberForIncorrectAnswer,
                    "name": exam.name,
                    "numberOfSeats": exam.numberOfSeats,
                    "cutMark": cut_mark
                },
                "userResult": user_result_info,
                "rankList": rank_list
            }

        return Response(response, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def createResult(request, exam_id, user_id):
    answerSheet = request.data['answerSheet']
    exam: ExamModel = ExamModel.objects.get(examId=exam_id)
    topicWiseResult = {}

    serialized_topics = TopicSerializer(ExamModel.objects.get(examId=exam_id).topics, many=True)
    topicIds = [topic['topicId'] for topic in serialized_topics.data]

    for topicId in topicIds:
        topicWiseResult[topicId] = UserDetailedResultInfo()

    numberForCorrectAnswer = exam.numberForCorrectAnswer
    numberForIncorrectAnswer = exam.numberForIncorrectAnswer
    for userAnswer in answerSheet:
        question: QuestionModel = QuestionModel.objects.get(questionId=userAnswer['questionId'])
        topicId = question.topic.topicId
        if question.answer == userAnswer['answer']:
            topicWiseResult[topicId].numberOfCorrectAnswer += + 1
            topicWiseResult[topicId].totalMarks += numberForCorrectAnswer
        else:
            topicWiseResult[topicId].numberOfIncorrectAnswer += 1
            topicWiseResult[topicId].totalMarks += numberForIncorrectAnswer

    for topicId in topicIds:
        userDetailedResultInfo = ResultModel(
            exam=exam,
            userId=UserModel.objects.get(userId=user_id),
            topicId=TopicModel.objects.get(topicId=topicId),
            numberOfCorrectAnswer=topicWiseResult[topicId].numberOfCorrectAnswer,
            numberOfIncorrectAnswer=topicWiseResult[topicId].numberOfIncorrectAnswer,
            totalMarks=topicWiseResult[topicId].totalMarks
        )
        userDetailedResultInfo.save()

    return Response("", status=status.HTTP_200_OK)


class UserDetailedResultInfo:
    numberOfCorrectAnswer: int = 0
    numberOfIncorrectAnswer: int = 0
    totalMarks: int = 0
