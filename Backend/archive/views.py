from rest_framework.response import Response
from rest_framework import status, permissions, viewsets
from question.serializers import SubjectQuerySerializer
from question.models import SubjectModel, QuestionModel


class ArchiveViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        user = request.user
        topics = SubjectModel.objects.prefetch_related('questions').filter(questions__archived_by_users__in=[user])
        serialized_topics = SubjectQuerySerializer(topics, many=True)
        return Response(serialized_topics.data, status=status.HTTP_200_OK)

    def update(self, request, pk):
        user = request.user
        filtered_questions = QuestionModel.objects.prefetch_related('archived_by_users').filter(id=pk)
        if not filtered_questions:
            return Response("no such question", status=status.HTTP_404_NOT_FOUND)

        question = filtered_questions[0]
        if user in question.archived_by_users.all():
            return Response("already archived", status=status.HTTP_400_BAD_REQUEST)
        question.archived_by_users.add(user)
        question.save()
        return Response("archived", status=status.HTTP_200_OK)

    def destroy(self, request, pk):
        user = request.user
        filtered_questions = QuestionModel.objects.prefetch_related('archived_by_users').filter(id=pk)
        if not filtered_questions:
            return Response("no such question", status=status.HTTP_404_NOT_FOUND)

        question = filtered_questions[0]
        if not (user in question.archived_by_users.all()):
            return Response("not archived", status=status.HTTP_400_BAD_REQUEST)
        question.archived_by_users.remove(user)
        question.save()
        return Response("deleted", status=status.HTTP_200_OK)
