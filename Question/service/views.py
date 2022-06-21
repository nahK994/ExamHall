from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserModel
from .serializers import UserSerializer


@api_view(['GET'])
def getAllQuestion(request):
    pass


@api_view(['GET'])
def getQuestion(request, question_id):
    pass


@api_view(['POST'])
def createQuestion(request):
    pass


@api_view(['PUT'])
def updateQuestion(request, question_id):
    pass

@api_view(['DELETE'])
def deleteQuestion(request, question_id):
    pass