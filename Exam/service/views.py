from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def getAllExam(request):
    pass


@api_view(['GET'])
def getExam(request, exam_id):
    pass


@api_view(['POST'])
def createExam(request):
    pass


@api_view(['PUT'])
def updateExam(request, exam_id):
    pass

@api_view(['DELETE'])
def deleteExam(request, exam_id):
    pass