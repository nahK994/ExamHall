from rest_framework import serializers
from . import models

class UserExamResultInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserExamResultInfoModel
        fields = '__all__'