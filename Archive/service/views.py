from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from question.serializers import QuestionSerializer
from user.serializers import UserSerializer
from question.models import QuestionModel
from user.models import UserModel


@api_view(['GET'])
def getUserArchivedQuestions(request, user_id):
    try:
        user = UserModel.objects.get(userId = user_id)
        questions = QuestionModel.objects.filter(users = user)
        serializer = QuestionSerializer(questions, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def createArchive(request, user_id, question_id):
    try:
        user = UserModel.objects.get(userId = user_id)
        question = QuestionModel.objects.get(questionId = question_id)
        user.questions.add(question)
        serializer = UserSerializer([user], many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['DELETE'])
def deleteUserArchive(request, user_id, question_id):
    try:
        user = UserModel.objects.get(userId = user_id)
        question = QuestionModel.objects.get(questionId = question_id)
        user.questions.remove(question)
        serializer = UserSerializer([user], many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)