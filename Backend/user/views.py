from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions

from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserModel
from .serializers import UserSerializer, UserListSerializer


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
    filtered_user = UserModel.objects.filter(email=request.data['email'])
    if not filtered_user:
        return Response("no such user", status=status.HTTP_403_FORBIDDEN)
    user = filtered_user[0]

    if user.check_password(request.data['password']):
        return Response(get_tokens_for_user(user), status=status.HTTP_200_OK)
    else:
        return Response("invalid email or password", status=status.HTTP_403_FORBIDDEN)


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

        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            user_obj = serialized_user.save()
        else:
            return Response(serialized_user.errors, status=status.HTTP_400_BAD_REQUEST)

        user_obj.set_password(request.data['password'])
        # user.save()
        return Response(user_obj.id, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([permissions.IsAuthenticated])
def update_user(request, user_id):
    if user_id != request.user.id:
        return Response({'message': 'You are not allowed to access other user details'}, status=status.HTTP_403_FORBIDDEN)

    if 'email' in request.data:
        user = UserModel.objects.filter(email=request.data['email'])
        if user:
            return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)

    filtered_user = UserModel.objects.filter(id=user_id)

    serialized_user = UserSerializer(filtered_user[0], data=request.data)
    if serialized_user.is_valid():
        serialized_user.save()

    if 'password' in request.data:
        user = filtered_user[0]
        user.set_password(request.data['password'])
    return Response(serialized_user.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
def delete_user(request, user_id):
    filtered_user = UserModel.objects.filter(id=user_id)
    if not filtered_user:
        return Response("no such user", status=status.HTTP_404_NOT_FOUND)
    user = filtered_user[0]

    user.delete()
    return Response("user deleted", status=status.HTTP_200_OK)
