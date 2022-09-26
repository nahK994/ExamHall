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
    question = QuestionModel.objects.get(questionId=question_id)
    serializer = QuestionSerializer(question)
    return Response(serializer.data, status=status.HTTP_200_OK)


def updateQuestionInfo(question_id: int, request: dict):
    question = QuestionModel.objects.get(questionId=question_id)

    question.questionText = request['questionText']
    question.option1 = request['option1']
    question.option2 = request['option2']
    question.option3 = request['option3']
    question.option4 = request['option4']
    question.option5 = request['option5']
    question.option6 = request['option6']
    question.answer = request['answer']
    question.explaination = request['explaination']
    question.topic = request['topic']
    question.save()

    return question


def saveQuestion(request: dict):
    question = QuestionModel(
        questionId=request['questionId'],
        questionText=request['questionText'],
        option1=request['option1'],
        option2=request['option2'],
        option3=request['option3'],
        option4=request['option4'],
        option5=request['option5'],
        option6=request['option6'],
        answer=request['answer'],
        explaination=request['explaination'],
        topic=request['topic']
    )
    question.save()

    return question


def manageQuestionData(data: dict):
    actionType = data['actionType']

    questionInfo = {}
    questionInfo["questionId"] = data["questionId"]
    if actionType != "DELETE":
        questionInfo["questionText"] = data["questionText"]
        questionInfo["option1"] = data["option1"]
        questionInfo["option2"] = data["option2"]
        questionInfo["option3"] = data["option3"]
        questionInfo["option4"] = data["option4"]
        questionInfo["option5"] = data["option5"]
        questionInfo["option6"] = data["option6"]
        questionInfo["answer"] = data["answer"]
        questionInfo["explaination"] = data["explaination"]
        questionInfo["topic"] = TopicModel.objects.get(topicId=data['topic'])

    if actionType == "POST":
        try:
            saveQuestion(questionInfo)
        except Exception as e:
            print(str(e))


    elif actionType == "DELETE":
        try:
            question = QuestionModel.objects.get(questionId=questionInfo['questionId'])
            question.delete()
        except Exception as e:
            print(str(e))

    elif actionType == "PUT":
        try:
            updateQuestionInfo(questionInfo["questionId"], questionInfo)
        except Exception as e:
            print(str(e))
