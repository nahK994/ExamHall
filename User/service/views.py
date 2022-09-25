from unicodedata import name
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserModel
from .serializers import UserSerializer, UserListSerializer
from .publisher import publish_message


@api_view(['GET'])
def get_all_user(request):
    users = UserModel.objects.all()
    serializer = UserListSerializer(users, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def login(request):
    try:
        filtered_user = UserModel.objects.filter(email=request.data['email'])
        if not filtered_user:
            return Response("no such user", status=status.HTTP_403_FORBIDDEN)
        user = filtered_user[0]

        if user.password == request.data['password']:
            return Response(user.userId, status=status.HTTP_200_OK)
        else:
            return Response(str(e), status=status.HTTP_403_FORBIDDEN)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['POST'])
def admin_login(request):
    data = request.data
    print(data)
    if data['email'] == "nkskl6@gmail.com" and data['password'] == "root":
        return Response("", status=status.HTTP_200_OK)
    else:
        return Response("", status=status.HTTP_403_FORBIDDEN)


@api_view(['GET'])
def get_user(request, user_id):
    user = UserModel.objects.filter(userId=user_id)
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_user(request):
    users = UserModel.objects.filter(email=request.data['email'])

    try:
        if len(users):
            raise Exception("Email has been used")

        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            serialized_data = serializer.data
            user = UserModel(
                userId=serialized_data['userId'],
                name=serialized_data['name'],
                email=serialized_data['email'],
                password=serialized_data['password']
            )
            publish_message("POST", user)

        else:
            raise Exception("Invalid request")
        return Response(user.userId, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_user(request, user_id):
    try:
        user = UserModel.objects.filter(email=request.data['email'])
        if len(user) > 0:
            for data in user.values():
                if data['userId'] != user_id:
                    raise Exception("Email already exists")

        user = UserModel.objects.get(userId=user_id)
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            user = UserModel(
                userId=serializer.data['userId'],
                name=serializer.data['name'],
                email=serializer.data['email'],
                password=serializer.data['password']
            )
            publish_message("PUT", user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['DELETE'])
def delete_user(request, user_id):
    try:
        filtered_user = UserModel.objects.filter(userId=user_id)
        if not filtered_user:
            return Response("no such user", status=status.HTTP_403_FORBIDDEN)
        user = filtered_user[0]

        publish_message("DELETE", user)
        user.delete()
        return Response("", status=status.HTTP_200_OK)
    except:
        return Response("", status=status.HTTP_403_FORBIDDEN)
