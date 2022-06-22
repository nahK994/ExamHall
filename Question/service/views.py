from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import QuestionModel
from .serializers import QuestionSerializer


@api_view(['GET'])
def getAllQuestion(request):
    questions = QuestionModel.objects.all()
    serialize = QuestionSerializer(questions)
    return Response(serialize.data, status = status.HTTP_200_OK)

@api_view(['GET'])
def getQuestion(request, question_id):
    question = QuestionModel.objects.filter(questionId = question_id)
    serialize = QuestionSerializer(question)
    return Response(serialize.data, status = status.HTTP_200_OK)


@api_view(['POST'])
def createQuestion(request):
    serializer = QuestionSerializer(data = request.data)

    try:
        if serializer.is_valid():
            serializer.save()
        else:
            raise Exception("Invalid request")
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def updateQuestion(request, question_id):
    question = QuestionModel.objects.get(questionId = question_id)
    questionSerializer = QuestionSerializer(question, data = request.data)

    try:
        if questionSerializer.is_valid():
            questionSerializer.save()
        return Response(questionSerializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['DELETE'])
def deleteQuestion(request, question_id):
    try:
        question = QuestionModel.objects.get(questionId = question_id)
        question.delete()
        return Response("", status=status.HTTP_200_OK)
    except:
        return Response("", status=status.HTTP_403_FORBIDDEN)