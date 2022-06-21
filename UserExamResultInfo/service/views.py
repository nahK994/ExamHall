from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserExamResultModel
from .serializers import UserExamResultSerializer


@api_view(['GET'])
def getAllUserExamResult(request):
    pass


@api_view(['GET'])
def getUserExamResult(request, id):
    pass


@api_view(['POST'])
def createUserExamResult(request):
    pass


@api_view(['PUT'])
def updateUserExamResult(request, id):
    pass

@api_view(['DELETE'])
def deleteUserExamResult(request, id):
    pass