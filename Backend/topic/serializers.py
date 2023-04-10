from os import name

from rest_framework import serializers
from . import models

class TopicSerializer(serializers.ModelSerializer):
    topicId = serializers.IntegerField(source='topic_id', required=False)
    class Meta:
        model = models.TopicModel
        fields = ['topicId', 'name']