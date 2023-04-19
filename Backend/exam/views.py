from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions, viewsets

from utils.mixins import ModelManagerMixin
from .models import ExamModel
from .serializers import ExamSerializer, ExamQuerySerializer


class ExamViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = ExamSerializer
    query_serializer_class = ExamQuerySerializer
    queryset = ExamModel.objects.all()


# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
# def get_all_exam(request):
#     exams = ExamModel.objects.all()
#     serialized_exams = ExamListSerializer(exams, many=True)
#     return Response(serialized_exams.data, status=status.HTTP_200_OK)
#
#
# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
# def get_exam(request, exam_id):
#     filtered_exam = ExamModel.objects.filter(id=exam_id)
#     if not filtered_exam:
#         return Response("no such exam", status=status.HTTP_403_FORBIDDEN)
#     exam = filtered_exam[0]
#     serialized_exam = ExamSerializer(exam)
#
#     return Response(serialized_exam.data, status=status.HTTP_200_OK)
#
#
# @api_view(['POST'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def create_exam(request):
#     serialized_exam = ExamCreateSerializer(data=request.data)
#     if serialized_exam.is_valid():
#         exam_obj = serialized_exam.save()
#     else:
#         return Response(serialized_exam.errors, status=status.HTTP_400_BAD_REQUEST)
#     return Response(exam_obj.exam_id, status=status.HTTP_201_CREATED)
#
#
# @api_view(['PUT'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def update_exam(request, exam_id):
#     filtered_exams = ExamModel.objects.filter(id=exam_id)
#     if not len(filtered_exams):
#         return Response("No such exam", status=status.HTTP_400_BAD_REQUEST)
#
#     serialized_exam = ExamCreateSerializer(filtered_exams[0], data=request.data)
#     if serialized_exam.is_valid():
#         exam_obj = serialized_exam.save()
#     else:
#         return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)
#
#     return Response(exam_obj.exam_id, status=status.HTTP_200_OK)
#
#
# @api_view(['DELETE'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def delete_exam(request, exam_id):
#     filtered_exam = ExamModel.objects.filter(id=exam_id)
#     if not filtered_exam:
#         return Response("no such exam", status=status.HTTP_403_FORBIDDEN)
#     exam = filtered_exam[0]
#
#     exam.delete()
#     return Response("exam deleted", status=status.HTTP_200_OK)
