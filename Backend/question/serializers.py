from rest_framework import serializers
from . import models


class QuestionSerializer(serializers.ModelSerializer):
    questionId = serializers.IntegerField(source='question_id', required=False)
    questionText = serializers.CharField(source='question_text')
    topicId = serializers.IntegerField(source='topic_id', required=False)
    class Meta:
        model = models.QuestionModel
        fields = ['questionId', 'questionText', 'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'explaination', 'topicId', 'answer']
