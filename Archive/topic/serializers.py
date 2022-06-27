from rest_framework import serializers
from . import models

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TopicModel
        fields = '__all__'