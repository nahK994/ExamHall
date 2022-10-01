from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions

from .models import UserModel
from .serializers import UserSerializer, UserListSerializer
from .publisher import publish_message
from rest_framework_simplejwt.tokens import RefreshToken


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
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

        if user.check_password(request.data['password']):
            return Response(get_tokens_for_user(user), status=status.HTTP_200_OK)
        else:
            return Response("invalid email or password", status=status.HTTP_403_FORBIDDEN)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user(request, user_id):
    if user_id != request.user.id:
        return Response({'message': 'You are not allowed to access other user details'}, status=status.HTTP_403_FORBIDDEN)

    filtered_user = UserModel.objects.filter(id=user_id)
    if not filtered_user:
        return Response({'message': 'no such user'}, status=status.HTTP_404_NOT_FOUND)
    user = filtered_user[0]
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_user(request):
    users = UserModel.objects.filter(email=request.data['email'])
    try:
        if users:
            return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)

        user = UserModel(
            name=request.data['name'],
            username=request.data['username'],
            email=request.data['email']
        )
        user.set_password(request.data['password'])
        user.save()

        publish_message("POST", user)
        return Response(user.id, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([permissions.IsAuthenticated])
def update_user(request, user_id):
    if user_id != request.user.id:
        return Response({'message': 'You are not allowed to access other user details'}, status=status.HTTP_403_FORBIDDEN)

    try:
        user = UserModel.objects.filter(email=request.data['email'])
        if user:
            return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)

        filtered_user = UserModel.objects.filter(id=user_id)
        filtered_user.update(
            name=request.data['name'],
            username=request.data['username'],
            email=request.data['email']
        )
        user = filtered_user[0]
        user.set_password(request.data['password'])
        serializer = UserSerializer(user)
        publish_message("PUT", user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
def delete_user(request, user_id):
    try:
        filtered_user = UserModel.objects.filter(id=user_id)
        if not filtered_user:
            return Response("no such user", status=status.HTTP_404_NOT_FOUND)
        user = filtered_user[0]

        publish_message("DELETE", user)
        user.delete()
        return Response("", status=status.HTTP_200_OK)
    except:
        return Response("", status=status.HTTP_403_FORBIDDEN)
