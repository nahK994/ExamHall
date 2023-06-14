from rest_framework import viewsets, permissions, status
from utils.mixins import ModelManagerMixin
from rest_framework.response import Response

from .models import QuestionModel, SubjectModel, QuestionBankModel, ChapterModel
from .serializers import SubjectWiseAllQuestionsSerializer, JobSolutionsSerializer, QuestionSerializer, SubjectSerializer, SubjectQuerySerializer, \
    QuestionBankSerializer, QuestionBankQuerySerializer, ChapterQuerySerializer, ChapterSerializer, SubjectWiseChaptersSerializer


class SubjectViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    query_serializer_class = SubjectQuerySerializer
    queryset = SubjectModel.objects.all()


class AdminQuestionBankViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionBankSerializer
    query_serializer_class = QuestionBankQuerySerializer
    queryset = QuestionBankModel.objects.all()


class QuestionBankViewset(viewsets.ViewSet):
    http_method_names = ['get']

    def list(self, request):
        subjects = QuestionBankModel.objects.all()
        response = QuestionBankSerializer(subjects, many=True).data
        return Response(response, status=status.HTTP_200_OK)

    def retrieve(self, request, pk):
        if not pk.isnumeric():
            return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)

        filtered_data = QuestionBankModel.objects.filter(pk=pk)
        if filtered_data:
            serializer = QuestionBankQuerySerializer(filtered_data[0], context={"request": request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response("Not found", status=status.HTTP_404_NOT_FOUND)


class ChapterViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = ChapterSerializer
    query_serializer_class = ChapterQuerySerializer
    queryset = ChapterModel.objects.all()


class QuestionViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    query_serializer_class = QuestionSerializer
    queryset = QuestionModel.objects.all()


class JobSolutionsViewset(viewsets.ViewSet):
    http_method_names = ['get']

    def list(self, request):
        subjects = SubjectModel.objects.all().prefetch_related('chapters', 'chapters__questions')
        response = JobSolutionsSerializer(subjects, many=True).data
        return Response(response, status=status.HTTP_200_OK)

class SubjectWiseAllQuestionsViewset(viewsets.ViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get']

    def list(self, request):
        subjects = SubjectModel.objects.all().prefetch_related('chapters', 'chapters__questions')
        response = SubjectWiseAllQuestionsSerializer(subjects, many=True).data
        return Response(response, status=status.HTTP_200_OK)


class SubjectWiseChaptersViewset(viewsets.ViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['get']

    def list(self, request):
        subjects = SubjectModel.objects.all().prefetch_related('chapters')
        response = SubjectWiseChaptersSerializer(subjects, many=True).data
        return Response(response, status=status.HTTP_200_OK)
