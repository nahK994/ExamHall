from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserModel
from .serializers import UserSerializer


@api_view(['GET'])
def getAllUser(request):
    users = UserModel.objects.all()
    serializer = UserSerializer(users, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getUser(request, user_id):
    user = UserModel.objects.filter(userId = user_id)
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def createUser(request):
    serializer = UserSerializer(data = request.data)
    users = UserModel.objects.filter(email = request.data['email'])

    try:
        if len(users):
            raise Exception("Email has been used")

        if serializer.is_valid():
            serializer.save()
        else:
            raise Exception("Invalid request")
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def updateUser(request, user_id):
    try:
        if 'email' in request.data:
            raise Exception("Email cannot be changed")

        user = UserModel.objects.get(userId = user_id)
        serializer = UserSerializer(user, data = request.data)

        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['DELETE'])
def deleteUser(request, user_id):
    try:
        user = UserModel.objects.get(userId = user_id)
        user.delete()
        return Response("", status=status.HTTP_200_OK)
    except:
        return Response("", status=status.HTTP_403_FORBIDDEN)