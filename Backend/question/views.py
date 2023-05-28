from rest_framework import viewsets
from utils.mixins import ModelManagerMixin

from .models import QuestionModel, SubjectModel, QuestionBankModel
from .serializers import QuestionSerializer, QuestionQuerySerializer, SubjectSerializer, SubjectQuerySerializer, \
    QuestionBankSerializer, QuestionBankQuerySerializer


class SubjectViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    query_serializer_class = SubjectQuerySerializer
    queryset = SubjectModel.objects.all()


class QuestionBankViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionBankSerializer
    query_serializer_class = QuestionBankQuerySerializer
    queryset = QuestionBankModel.objects.all()


class QuestionViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    query_serializer_class = QuestionQuerySerializer
    queryset = QuestionModel.objects.all()
