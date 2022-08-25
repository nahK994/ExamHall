from rest_framework import serializers
from . import models

from user.models import UserModel

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ResultModel
        fields = '__all__'


class RankListSerializer(serializers.ModelSerializer):
    totalMarks = serializers.FloatField(max_value=None, min_value=None)
    class Meta:
        model = UserModel
        fields = ['name', 'email', 'userId', 'totalMarks']