from rest_framework import serializers

from topic.serializers import TopicSerializer
from .models import ResultModel

from user.models import UserModel


class ResultSerializer(serializers.ModelSerializer):
    numberOfCorrectAnswer = serializers.FloatField(source='number_of_correct_answer')
    numberOfIncorrectAnswer = serializers.FloatField(source='number_of_incorrect_answer')
    topic = TopicSerializer()

    class Meta:
        model = ResultModel
        fields = ['topic', 'numberOfCorrectAnswer', 'numberOfIncorrectAnswer', 'marks']


class RankListSerializer(serializers.ModelSerializer):
    totalMarks = serializers.FloatField(source='total_marks')

    class Meta:
        model = UserModel
        fields = ['name', 'totalMarks']
