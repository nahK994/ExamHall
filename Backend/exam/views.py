from rest_framework import viewsets

from utils.mixins import ModelManagerMixin
from .models import ExamModel
from .serializers import ExamSerializer, ExamQuerySerializer


class ExamViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = ExamSerializer
    query_serializer_class = ExamQuerySerializer
    queryset = ExamModel.objects.all()
