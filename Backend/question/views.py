from rest_framework import viewsets, permissions, status
from utils.mixins import ModelManagerMixin
from rest_framework.response import Response

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


class AllQuestionsViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get']

    def list(self, request):
        subjects = SubjectModel.objects.all().prefetch_related('questions')
        response = SubjectQuerySerializer(subjects, many=True).data
        return Response(response, status=status.HTTP_200_OK)
