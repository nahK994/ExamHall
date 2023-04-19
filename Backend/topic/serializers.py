from rest_framework import serializers
from question.serializers import QuestionQuerySerializer
from . import models


class TopicQuerySerializer(serializers.ModelSerializer):
    questions = QuestionQuerySerializer(many=True)
    topicId = serializers.IntegerField(source='id')

    class Meta:
        model = models.TopicModel
        fields = ['topicId', 'name', 'questions']


class TopicSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.TopicModel
        fields = ['name']
