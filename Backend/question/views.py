from rest_framework import viewsets
from utils.mixins import ModelManagerMixin

from .models import QuestionModel, SubjectModel
from .serializers import QuestionSerializer, QuestionQuerySerializer, SubjectSerializer, SubjectQuerySerializer


class SubjectViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    query_serializer_class = SubjectQuerySerializer
    queryset = SubjectModel.objects.all()


class QuestionViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    query_serializer_class = QuestionQuerySerializer
    queryset = QuestionModel.objects.all()
