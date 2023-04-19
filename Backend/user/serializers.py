from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields = ['name', 'email']


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields = ['id', 'name', 'email', 'password']