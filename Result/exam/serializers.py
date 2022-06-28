from rest_framework import serializers
from . import models

class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ExamModel
        fields = '__all__'