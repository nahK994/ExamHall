from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserModel
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuestionModel
        fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TopicModel
        fields = '__all__'