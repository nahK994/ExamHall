from rest_framework import serializers
from . import models

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ResultModel
        fields = '__all__'