from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserModel
from .serializers import UserSerializer

@api_view(['GET'])
def getAllUsers(request):
    users = UserModel.objects.all()
    serializers = UserSerializer(users, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getUser(request, user_id):
    user = UserModel.objects.get(userId = user_id)    
    serializer = UserSerializer([user], many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# @api_view(['POST'])
# def createUser(request):
#     pass


# @api_view(['PUT'])
# def updateUser(request, user_id):
#     pass


# @api_view(['DELETE'])
# def deleteUser(request, user_id):
#     pass

# Create your views here.
def manageUserData(data: dict):
    actionType = data['actionType']

    userInfo = {}
    userInfo["userId"] = data["userId"]
    if actionType != "DELETE":
        userInfo["email"] = data["email"]
        userInfo["name"] = data["name"]
        userInfo["password"] = data["password"]

    if actionType == "POST":
        user = UserModel(
            userId = userInfo["userId"],
            name = userInfo["name"],
            email = userInfo["email"],
            password = userInfo["password"]
        )
        try:
            user.save()
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
            user.name = userInfo["name"]
            user.email = userInfo["email"]
            user.password = userInfo["password"]
            user.save()

            serializer = UserSerializer([user], many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(str(e))