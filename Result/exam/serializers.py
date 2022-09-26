from rest_framework import serializers
from . import models
from question.serializers import QuestionSerializer
from topic.serializers import TopicSerializer


class ExamListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name']


class ExamSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)
    topics = TopicSerializer(many=True)

    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'topics']
