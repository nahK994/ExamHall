from rest_framework import viewsets

from utils.mixins import ModelManagerMixin
from .models import ClassModel, LectureModel
from .serializers import LectureSerializer, ClassSerializer, ClassQuerySerializer, LectureQuerySerializer


class ClassViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = ClassSerializer
    query_serializer_class = ClassQuerySerializer
    queryset = ClassModel.objects.all()


class LectureViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = LectureSerializer
    query_serializer_class = LectureQuerySerializer
    queryset = LectureModel.objects.all()
