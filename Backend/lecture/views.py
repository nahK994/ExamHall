from rest_framework import viewsets

from utils.mixins import ModelManagerMixin
from .models import CourseModel, LectureModel
from .serializers import LectureSerializer, CourseSerializer, CourseQuerySerializer, LectureQuerySerializer


class CourseViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    query_serializer_class = CourseQuerySerializer
    queryset = CourseModel.objects.all()


class LectureViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = LectureSerializer
    query_serializer_class = LectureQuerySerializer
    queryset = LectureModel.objects.all()
