from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from topic.serializers import TopicQuerySerializer
from topic.models import TopicModel
from question.models import QuestionModel


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_archived_questions(request):
    user = request.user
    topics = TopicModel.objects.prefetch_related('questions').filter(questions__archived_by_users__in=[user])
    serialized_topics = TopicQuerySerializer(topics, many=True)
    return Response(serialized_topics.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_archive(request, question_id):
    user = request.user
    filtered_questions = QuestionModel.objects.filter(question_id=question_id)
    if not filtered_questions:
        return Response("no such question", status=status.HTTP_404_NOT_FOUND)

    question = filtered_questions[0]
    question.archived_by_users.add(user)
    question.save()
    return Response("archived", status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated])
def delete_user_archive(request, question_id):
    user = request.user
    filtered_questions = QuestionModel.objects.filter(question_id=question_id)
    if not filtered_questions:
        return Response("no such question", status=status.HTTP_404_NOT_FOUND)

    question = filtered_questions[0]
    question.archived_by_users.remove(user)
    question.save()
    return Response("deleted", status=status.HTTP_200_OK)
