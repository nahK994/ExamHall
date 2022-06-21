from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import ResultModel
from .serializers import ResultSerializer


@api_view(['GET'])
def getAllResult(request):
    pass


@api_view(['GET'])
def getResult(request, result_id):
    pass


@api_view(['POST'])
def createResult(request):
    pass


@api_view(['PUT'])
def updateResult(request, result_id):
    pass

@api_view(['DELETE'])
def deleteResult(request, result_id):
    pass