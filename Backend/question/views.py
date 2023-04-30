from rest_framework import viewsets
from utils.mixins import ModelManagerMixin

from .models import QuestionModel, TopicModel
from .serializers import QuestionSerializer, QuestionQuerySerializer, TopicSerializer, TopicQuerySerializer


class TopicViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    query_serializer_class = TopicQuerySerializer
    queryset = TopicModel.objects.all()


class QuestionViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    query_serializer_class = QuestionQuerySerializer
    queryset = QuestionModel.objects.all()
