from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserModel
from .serializers import UserSerializer, UserListSerializer


@api_view(['GET'])
def get_all_users(request):
    users = UserModel.objects.all()
    serializers = UserListSerializer(users, many=True)
    return Response(serializers.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_user(request, user_id):
    filtered_user = UserModel.objects.filter(userId=user_id)
    if not filtered_user:
        return Response("no such user", status=status.HTTP_404_NOT_FOUND)
    exam = filtered_user[0]

    serializer = UserSerializer(exam)
    return Response(serializer.data, status=status.HTTP_200_OK)


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
            userId=userInfo["userId"],
            name=userInfo["name"],
            email=userInfo["email"],
            password=userInfo["password"]
        )
        try:
            user.save()
        except Exception as e:
            print(str(e))

    elif actionType == "DELETE":
        try:
            user = UserModel.objects.get(userId=userInfo['userId'])
            user.delete()
        except Exception as e:
            print(str(e))

    elif actionType == "PUT":
        try:
            user = UserModel.objects.filter(email=userInfo['email'])
            if len(user) > 0:
                for data in user.values():
                    if data['userId'] != userInfo['userId']:
                        raise Exception("Email already exists")

            user = UserModel.objects.get(userId=userInfo['userId'])
            user.name = userInfo["name"]
            user.email = userInfo["email"]
            user.password = userInfo["password"]
            user.save()

            serializer = UserSerializer([user], many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(str(e))
