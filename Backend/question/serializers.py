from rest_framework import serializers
from . import models


class QuestionSerializer(serializers.ModelSerializer):
    questionText = serializers.CharField(source='question_text')

    class Meta:
        model = models.QuestionModel
        fields = ['questionText', 'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'explaination',
                  'topic', 'answer']


class QuestionQuerySerializer(serializers.ModelSerializer):
    questionId = serializers.IntegerField(source='id', required=False)
    questionText = serializers.CharField(source='question_text')

    class Meta:
        model = models.QuestionModel
        fields = ['questionId', 'questionText', 'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'topic',
                  'explaination', 'answer']
