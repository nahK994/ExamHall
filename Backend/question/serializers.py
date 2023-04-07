from rest_framework import serializers
from . import models


class QuestionSerializer(serializers.ModelSerializer):
    questionId = serializers.CharField(source='question_id', required=False)
    questionText = serializers.CharField(source='question_text')
    class Meta:
        model = models.QuestionModel
        fields = ['questionId', 'questionText', 'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'explaination', 'topic', 'answer']
