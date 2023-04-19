from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions, viewsets

from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserModel
from .serializers import UserSerializer, UserListSerializer
from django.contrib.auth import get_user_model


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def get_all_user(request):
#     users = UserModel.objects.all()
#     serializer = UserListSerializer(users, many=True)
#
#     return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# @api_view(['POST'])
# def login(request):
#     filtered_user = UserModel.objects.filter(email=request.data['email'])
#     if not filtered_user:
#         return Response("no such user", status=status.HTTP_403_FORBIDDEN)
#     user = filtered_user[0]
#
#     if user.check_password(request.data['password']):
#         user_info = get_tokens_for_user(user)
#         user_info['isAdmin'] = user.is_admin
#         return Response(user_info, status=status.HTTP_200_OK)
#     else:
#         return Response("invalid email or password", status=status.HTTP_403_FORBIDDEN)
#
#
# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
# def get_user(request, user_id):
#     if user_id != request.user.id:
#         return Response({'message': 'You are not allowed to access other user details'}, status=status.HTTP_403_FORBIDDEN)
#
#     filtered_user = UserModel.objects.filter(id=user_id)
#     if not filtered_user:
#         return Response({'message': 'no such user'}, status=status.HTTP_404_NOT_FOUND)
#     user = filtered_user[0]
#     serializer = UserSerializer(user)
#     return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# @api_view(['POST'])
# def create_user(request):
#     try:
#         if len(UserModel.objects.filter(email=request.data['email'])):
#             return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)
#
#         user_obj = get_user_model().objects.create_user(**request.data)
#         return Response(user_obj.id, status=status.HTTP_201_CREATED)
#     except Exception as e:
#         return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
#
#
# @api_view(['PUT'])
# @permission_classes([permissions.IsAuthenticated])
# def update_user(request):
#     user = request.user
#     if 'email' in request.data:
#         filtered_user = UserModel.objects.filter(email=request.data['email'])
#         if filtered_user and filtered_user[0] != user:
#             return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)
#     filtered_user.update(**request.data)
#
#     user = filtered_user[0]
#     if 'password' in request.data:
#         user.set_password(request.data['password'])
#     user.save()
#     serialized_user = UserSerializer(user)
#     return Response(serialized_user.data, status=status.HTTP_200_OK)
#
#
# @api_view(['DELETE'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def delete_user(request, user_id):
#     filtered_user = UserModel.objects.filter(id=user_id)
#     if not filtered_user:
#         return Response("no such user", status=status.HTTP_404_NOT_FOUND)
#     user = filtered_user[0]
#
#     user.delete()
#     return Response("user deleted", status=status.HTTP_200_OK)


class UserLoginViewset(viewsets.ViewSet):

    def create(self, request):
        filtered_user = UserModel.objects.filter(email=request.data['email'])
        if not filtered_user:
            return Response("no such user", status=status.HTTP_403_FORBIDDEN)
        user = filtered_user[0]

        if user.check_password(request.data['password']):
            user_info = get_tokens_for_user(user)
            user_info['isAdmin'] = user.is_admin
            user_info['userId'] = user.id
            return Response(user_info, status=status.HTTP_200_OK)
        else:
            return Response("invalid email or password", status=status.HTTP_403_FORBIDDEN)


class UserViewset(viewsets.ViewSet):

    def list(self, request):
        if not request.user.is_admin:
            return Response("not allowed", status=status.HTTP_403_FORBIDDEN)

        users = UserModel.objects.all()
        serializer = UserListSerializer(users, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk):
        if pk != request.user.id:
            return Response({'message': 'You are not allowed to access other user details'},
                            status=status.HTTP_403_FORBIDDEN)

        filtered_user = UserModel.objects.filter(id=pk)
        if not filtered_user:
            return Response({'message': 'no such user'}, status=status.HTTP_404_NOT_FOUND)
        user = filtered_user[0]
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        try:
            if len(UserModel.objects.filter(email=request.data['email'])):
                return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)

            user_obj = get_user_model().objects.create_user(**request.data)
            return Response(user_obj.id, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        user = request.user
        if 'email' in request.data:
            filtered_user = UserModel.objects.filter(email=request.data['email']).exclude(id=pk)
            if filtered_user:
                return Response({'message': 'Email already exists'}, status=status.HTTP_403_FORBIDDEN)

        user.email = request.data['email']
        user.name = request.data['name']

        if 'password' in request.data:
            user.set_password(request.data['password'])
        user.save()
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        if not request.user.is_admin:
            return Response("not allowed", status=status.HTTP_403_FORBIDDEN)

        filtered_user = UserModel.objects.filter(id=pk)
        if not filtered_user:
            return Response("no such user", status=status.HTTP_404_NOT_FOUND)
        user = filtered_user[0]

        user.delete()
        return Response("user deleted", status=status.HTTP_200_OK)
