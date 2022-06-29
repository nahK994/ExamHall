from rest_framework import serializers
from . import models

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ResultModel
        fields = '__all__'

class UserDetailedResultInfoModel(serializers.ModelSerializer):
    class Meta:
        model = models.UserDetailedResultInfoModel
        fields = '__all__'

class UserResultInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserResultInfoModel
        fields = '__all__'