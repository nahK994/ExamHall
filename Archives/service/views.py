from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import QuestionModel, UserModel
from .serializers import QuestionSerializer, UserSerializer


@api_view(['GET'])
def getAllArchives(request):
    users = UserModel.objects.all()
    serializers = UserSerializer(users, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getArchive(request, question_id):
    pass


@api_view(['POST'])
def createArchive(request):
    pass


@api_view(['DELETE'])
def deleteArchive(request, question_id):
    pass



def manageUserData(data: dict):
    actionType = data['actionType']

    userInfo = {}
    userInfo["userId"] = data["userId"]
    if actionType != "DELETE":
        userInfo["email"] = data["email"]
        userInfo["name"] = data["name"]
        userInfo["password"] = data["password"]

    if actionType == "POST":
        serializer = UserSerializer(data = userInfo)
        try:
            if serializer.is_valid():
                serializer.save()
        except Exception as e:
            print(str(e))

    elif actionType == "DELETE":
        try:
            user = UserModel.objects.get(userId = userInfo['userId'])
            user.delete()
        except Exception as e:
            print(str(e))

    elif actionType == "PUT":
        try:
            user = UserModel.objects.filter(email = userInfo['email'])
            if len(user) > 0:
                for data in user.values():
                    if data['userId'] != userInfo['userId']:
                        raise Exception("Email already exists")
                    
            user = UserModel.objects.get(userId = userInfo['userId'])
            serializer = UserSerializer(user, data = userInfo)

            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(str(e))