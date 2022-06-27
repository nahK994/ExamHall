from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from question.models import QuestionModel

from .models import ExamModel
from .serializers import ExamSerializer

@api_view(['GET'])
def getAllExam(request):
    exams = ExamModel.objects.all()
    serializer = ExamSerializer(exams, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getExam(request, exam_id):
    exam = ExamModel.objects.get(examId = exam_id)
    serializer = ExamSerializer(exam, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def createExam(request):
    try:
        exam = saveQuestion(request.data)
        serializer = ExamSerializer([exam], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def updateExam(request, exam_id):
    try:        
        exam = updateExamInfo(exam_id, request.data)
        serializer = ExamSerializer([exam], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)

@api_view(['DELETE'])
def deleteExam(request, exam_id):
    try:
        exam = ExamModel.objects.get(examId = exam_id)
        exam.delete()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def updateExamInfo(exam_id: int, request: dict):
    exam = ExamModel.objects.get(examId = exam_id)

    exam.name = request['name']
    exam.numberForCorrectAnswer = request['numberForCorrectAnswer']
    exam.numberForIncorrectAnswer = request['numberForIncorrectAnswer']
    exam.numberOfSeats = request['numberOfSeats']

    exam.questions.clear()
    for questionId in request['questionIds']:
        exam.questions.add(
            QuestionModel.objects.get(questionId = questionId)
        )
    exam.save()

    return exam

def saveQuestion(request: dict):
    exam = ExamModel(
        name = request['name'],
        numberForCorrectAnswer = request['numberForCorrectAnswer'],
        numberForIncorrectAnswer = request['numberForIncorrectAnswer'],
        numberOfSeats = request['numberOfSeats'],
    )

    exam.save()
    for questionId in request['questionIds']:
        exam.questions.add(
            QuestionModel.objects.get(questionId = questionId)
        )

    return exam