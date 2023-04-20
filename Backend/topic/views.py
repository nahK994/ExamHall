from .models import TopicModel
from .serializers import TopicSerializer, TopicQuerySerializer
from rest_framework import viewsets
from utils.mixins import ModelManagerMixin


class TopicViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = TopicSerializer
    query_serializer_class = TopicQuerySerializer
    queryset = TopicModel.objects.all()
