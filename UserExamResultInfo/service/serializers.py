from rest_framework import serializers
from . import models

class UserExamResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserExamResultModel
        fields = '__all__'