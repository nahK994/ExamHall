from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserArchivedQuestionModel
from .serializers import UserArchivedQuestion
from user.models import UserModel
from question.models import QuestionModel


@api_view(['GET'])
def get_user_archived_questions(request, user_id):
    try:
        filtered_archived_questions = UserArchivedQuestionModel.objects.filter(user=user_id)
        if not filtered_archived_questions:
            return Response("no archieved questions", status=status.HTTP_200_OK)
        archived_questions = filtered_archived_questions[0]

        serialized_archived_questions = UserArchivedQuestion(archived_questions)
        return Response(serialized_archived_questions.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def create_archive(request, user_id, question_id):
    try:
        filtered_user_archived_questions = UserArchivedQuestionModel.objects.filter(user=user_id)
        if not filtered_user_archived_questions:
            user_archived_questions = UserArchivedQuestionModel.objects.create(
                user=UserModel.objects.get(userId=user_id)
            )
            user_archived_questions.questions.add(
                QuestionModel.objects.get(questionId=question_id)
            )
        else:
            user_archived_questions = filtered_user_archived_questions[0]
            question = QuestionModel.objects.get(questionId=question_id)
            if question in user_archived_questions.questions.all():
                return Response("already archived", status=status.HTTP_200_OK)

            user_archived_questions.questions.add(question)
            user_archived_questions.save()
        return Response("", status=status.HTTP_201_CREATED)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['DELETE'])
def delete_user_archive(request, user_id, question_id):
    try:
        filtered_archived_questions = UserArchivedQuestionModel.objects.filter(user=user_id)
        if not filtered_archived_questions:
            return Response("there is no archieved question to delete", status=status.HTTP_200_OK)
        archived_questions = filtered_archived_questions[0]

        question = QuestionModel.objects.get(questionId=question_id)
        if not (question in archived_questions.questions.all()):
            return Response("this question has not been archived", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        archived_questions.questions.remove(question)
        archived_questions.save()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
