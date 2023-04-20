from rest_framework import viewsets
from utils.mixins import ModelManagerMixin

from .models import QuestionModel
from .serializers import QuestionSerializer, QuestionQuerySerializer


class QuestionViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    query_serializer_class = QuestionQuerySerializer
    queryset = QuestionModel.objects.all()
