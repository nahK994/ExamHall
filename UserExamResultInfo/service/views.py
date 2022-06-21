from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserExamResultInfoModel
from .serializers import UserExamResultInfoSerializer


@api_view(['GET'])
def getAllUserExamResultInfo(request):
    pass


@api_view(['GET'])
def getUserExamResultInfo(request, id):
    pass


@api_view(['POST'])
def createUserExamResultInfo(request):
    pass


@api_view(['PUT'])
def updateUserExamResultInfo(request, id):
    pass

@api_view(['DELETE'])
def deleteUserExamResultInfo(request, id):
    pass