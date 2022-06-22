from rest_framework import serializers
from . import models

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuestionModel
        fields = '__all__'