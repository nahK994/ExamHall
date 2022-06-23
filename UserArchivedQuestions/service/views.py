from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import QuestionModel, UserModel
from .serializers import QuestionSerializer, UserSerializer


@api_view(['GET'])
def getAllArchives(request):
    pass


@api_view(['GET'])
def getArchive(request, question_id):
    pass


@api_view(['POST'])
def createArchive(request):
    pass


@api_view(['DELETE'])
def deleteArchive(request, question_id):
    pass