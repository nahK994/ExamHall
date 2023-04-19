from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions, viewsets

from topic.models import TopicModel
from utils.mixins import ModelManagerMixin

from .models import QuestionModel
from .serializers import QuestionSerializer, QuestionQuerySerializer


class QuestionViewset(ModelManagerMixin, viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    query_serializer_class = QuestionQuerySerializer
    queryset = QuestionModel.objects.all()


# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
# def get_all_question(request):
#     questions = QuestionModel.objects.all()
#     serializer = QuestionSerializer(questions, many=True)
#     return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# @api_view(['GET'])
# @permission_classes([permissions.IsAuthenticated])
# def get_question(request, question_id):
#     question = QuestionModel.objects.get(id=question_id)
#     serializer = QuestionSerializer(question)
#     return Response(serializer.data, status=status.HTTP_200_OK)
#
#
# @api_view(['POST'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def create_question(request):
#     if not TopicModel.objects.filter(id=request.data['topicId']).exists():
#         return Response("No such topic", status=status.HTTP_400_BAD_REQUEST)
#
#     serialized_question = QuestionSerializer(data=request.data)
#     if serialized_question.is_valid():
#         question_obj = serialized_question.save()
#     else:
#         return Response(serialized_question.errors, status=status.HTTP_400_BAD_REQUEST)
#     return Response(question_obj.question_id, status=status.HTTP_201_CREATED)
#
#
# @api_view(['PUT'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def update_question(request, question_id):
#     filtered_question = QuestionModel.objects.filter(id=question_id)
#     if not len(filtered_question):
#         return Response("No such question", status=status.HTTP_400_BAD_REQUEST)
#
#     if not TopicModel.objects.filter(id=request.data['topicId']).exists():
#         return Response("No such topic", status=status.HTTP_400_BAD_REQUEST)
#
#     serialized_question = QuestionSerializer(filtered_question[0], data=request.data)
#     if serialized_question.is_valid():
#         question_obj = serialized_question.save()
#     else:
#         return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)
#     return Response(question_obj.question_id, status=status.HTTP_200_OK)
#
#
# @api_view(['DELETE'])
# @permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
# def delete_question(request, question_id):
#     filtered_question = QuestionModel.objects.filter(id=question_id)
#     if not len(filtered_question):
#         return Response("No such question", status=status.HTTP_400_BAD_REQUEST)
#
#     filtered_question[0].delete()
#     return Response("question deleted", status=status.HTTP_200_OK)
