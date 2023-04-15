from os import name

from rest_framework import serializers

from question.serializers import QuestionSerializer
from . import models


class TopicQuerySerializer(serializers.ModelSerializer):
    topicId = serializers.IntegerField(source='topic_id', required=False)
    questions = QuestionSerializer(many=True)

    class Meta:
        model = models.TopicModel
        fields = ['topicId', 'name', 'questions']


class TopicSerializer(serializers.ModelSerializer):
    topicId = serializers.IntegerField(source='topic_id', required=False)

    class Meta:
        model = models.TopicModel
        fields = ['topicId', 'name']
