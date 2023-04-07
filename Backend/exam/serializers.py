from rest_framework import serializers
from . import models
from question.serializers import QuestionSerializer
from topic.serializers import TopicSerializer


class ExamListSerializer(serializers.ModelSerializer):
    examId = serializers.CharField(source='exam_id')
    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name']


class ExamCreateSerializer(serializers.ModelSerializer):
    examId = serializers.CharField(source='exam_id', required=False)
    numberForCorrectAnswer = serializers.CharField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.CharField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.CharField(source="number_of_seats")

    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'topics']


class ExamSerializer(serializers.ModelSerializer):
    examId = serializers.CharField(source='exam_id', required=False)
    questions = QuestionSerializer(many=True, required=False)
    topics = TopicSerializer(many=True, required=False)
    numberForCorrectAnswer = serializers.CharField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.CharField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.CharField(source="number_of_seats")

    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'topics']
