from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields = ['name', 'email']


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length='255')
    password = serializers.CharField(max_length='500')


class UserCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length='255')
    email = serializers.CharField(max_length='255')
    password = serializers.CharField(max_length='500')


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields = ['id', 'name', 'email', 'password', 'is_admin']
