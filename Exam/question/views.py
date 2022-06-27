# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from topic.models import TopicModel

from .models import QuestionModel
from .serializers import QuestionSerializer


@api_view(['GET'])
def getAllQuestion(request):
    questions = QuestionModel.objects.all()
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getQuestion(request, question_id):
    question = QuestionModel.objects.get(questionId = question_id)
    serializer = QuestionSerializer(question, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def createQuestion(request):
    try:
        question = saveQuestion(request.data)

        serializer = QuestionSerializer([question], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def updateQuestion(request, question_id):
    try:        
        question = updateQuestionInfo(question_id, request.data)

        serializer = QuestionSerializer([question], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)

@api_view(['DELETE'])
def deleteQuestion(request, question_id):
    try:
        question = QuestionModel.objects.get(questionId = question_id)
        question.delete()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def updateQuestionInfo(question_id: int, request: dict):
    question = QuestionModel.objects.get(questionId = question_id)

    question.questionText = request['questionText']
    question.option1 = request['option1']
    question.option2 = request['option2']
    question.option3 = request['option3']
    question.option4 = request['option4']
    question.option5 = request['option5']
    question.option6 = request['option6']
    question.answer = request['answer']
    question.explaination = request['explaination']
    question.topic = TopicModel.objects.get(topicId = request['topicId'])
    question.save()

    return question

def saveQuestion(request: dict):
    question = QuestionModel(
        questionText = request['questionText'],
        option1 = request['option1'],
        option2 = request['option2'],
        option3 = request['option3'],
        option4 = request['option4'],
        option5 = request['option5'],
        option6 = request['option6'],
        answer = request['answer'],
        explaination = request['explaination'],

        topic = TopicModel.objects.get(topicId = request['topicId'])
    )
    question.save()

    return question