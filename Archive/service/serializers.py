from rest_framework import serializers
from . import models
from user.models import UserModel
from question.models import QuestionModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['userId', 'name']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionModel
        fields = '__all__'


class UserArchivedQuestion(serializers.ModelSerializer):
    user = UserSerializer()
    questions = QuestionSerializer(many=True)

    class Meta:
        model = models.UserArchivedQuestionModel
        fields = ['user', 'questions']
