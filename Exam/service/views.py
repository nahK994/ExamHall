from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from service.publisher import publish_message

from .models import ExamModel
from .serializers import ExamSerializer, ExamListSerializer
from topic.models import TopicModel
from question.models import QuestionModel


@api_view(['GET'])
def get_all_exam(request):
    exams = ExamModel.objects.all()
    serialized_exams = ExamListSerializer(exams, many=True)

    return Response(serialized_exams.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_exam(request, exam_id):
    filtered_exam = ExamModel.objects.filter(examId=exam_id)
    if not filtered_exam:
        return Response("no such exam", status=status.HTTP_403_FORBIDDEN)
    exam = filtered_exam[0]
    serialized_exam = ExamSerializer(exam)

    return Response(serialized_exam.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_exam(request):
    try:
        exam = save_exam(request.data)
        publish_message("POST", exam)
        serializer = ExamSerializer(exam)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def update_exam(request, exam_id):
    try:
        exam = update_exam_info(exam_id, request.data)
        publish_message("PUT", exam)
        serializer = ExamSerializer(exam)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['DELETE'])
def delete_exam(request, exam_id):
    try:
        filtered_exam = ExamModel.objects.filter(examId=exam_id)
        if not filtered_exam:
            return Response("no such exam", status=status.HTTP_403_FORBIDDEN)
        exam = filtered_exam[0]

        publish_message("DELETE", exam)
        exam.delete()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def update_exam_info(exam_id: int, request: dict):
    exam = ExamModel.objects.get(examId=exam_id)

    exam.name = request['name']
    exam.numberForCorrectAnswer = request['numberForCorrectAnswer']
    exam.numberForIncorrectAnswer = request['numberForIncorrectAnswer']
    exam.numberOfSeats = request['numberOfSeats']

    exam.questions.clear()
    for questionId in request['questions']:
        exam.questions.add(questionId)

    exam.topics.clear()
    for topicId in request['topics']:
        exam.topics.add(topicId)

    exam.save()
    return exam


def save_exam(request: dict):
    exam = ExamModel(
        name=request['name'],
        numberForCorrectAnswer=request['numberForCorrectAnswer'],
        numberForIncorrectAnswer=request['numberForIncorrectAnswer'],
        numberOfSeats=request['numberOfSeats'],
    )

    exam.save()
    for questionId in request['questions']:
        exam.questions.add(questionId)

    for topicId in request['topics']:
        exam.topics.add(topicId)

    return exam
