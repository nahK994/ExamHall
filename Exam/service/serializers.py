from rest_framework import serializers
from . import models


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuestionModel
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TopicModel
        fields = '__all__'


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
