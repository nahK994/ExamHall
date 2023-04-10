from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions

from .models import ArchivedQuestionModel
from question.serializers import QuestionSerializer
from question.models import QuestionModel


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_user_archived_questions(request):
    user = request.user
    try:
        filtered_archived_questions = ArchivedQuestionModel.objects.filter(user=user)
        if not filtered_archived_questions:
            return Response([], status=status.HTTP_200_OK)
        archived_questions = filtered_archived_questions[0].questions

        serialized_archived_questions = QuestionSerializer(archived_questions, many=True)
        return Response(serialized_archived_questions.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_archive(request, question_id):
    user = request.user
    filtered_user_archived_questions = ArchivedQuestionModel.objects.filter(user=user)
    if not filtered_user_archived_questions:
        user_archived_questions = ArchivedQuestionModel.objects.create(
            user=user
        )
        user_archived_questions.questions.add(
            QuestionModel.objects.get(question_id=question_id)
        )
    else:
        user_archived_questions = filtered_user_archived_questions[0]
        question = QuestionModel.objects.get(question_id=question_id)
        if question in user_archived_questions.questions.all():
            return Response("already archived", status=status.HTTP_400_BAD_REQUEST)

        user_archived_questions.questions.add(question)
        user_archived_questions.save()
    return Response("archived", status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated])
def delete_user_archive(request, question_id):
    user = request.user
    filtered_archived_questions = ArchivedQuestionModel.objects.filter(user=user)
    if not filtered_archived_questions:
        return Response("there is no archieved question to delete", status=status.HTTP_200_OK)
    archived_questions = filtered_archived_questions[0]

    question = QuestionModel.objects.get(question_id=question_id)
    if not (question in archived_questions.questions.all()):
        return Response("this question has not been archived", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    archived_questions.questions.remove(question)
    archived_questions.save()
    return Response("removed", status=status.HTTP_200_OK)
