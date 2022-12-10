from rest_framework import serializers
from . import models
from user.serializers import UserSerializer
from questions.serializers import QuestionSerializer


class UserArchivedQuestion(serializers.ModelSerializer):
    user = UserSerializer()
    questions = QuestionSerializer(many=True)

    class Meta:
        model = models.UserArchivedQuestionModel
        fields = ['user', 'questions']
