from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from topic.models import TopicModel
from question.models import QuestionModel

from .models import ExamModel
from .serializers import ExamSerializer

@api_view(['GET'])
def getAllExam(request):
    exams = ExamModel.objects.all()
    serializer = ExamSerializer(exams, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getExam(request, exam_id):
    exam = ExamModel.objects.get(examId = exam_id)
    serializer = ExamSerializer(exam, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)


def updateExamInfo(exam_id: int, request: dict):
    exam = ExamModel.objects.get(examId = exam_id)

    exam.name = request['name']
    exam.numberForCorrectAnswer = request['numberForCorrectAnswer']
    exam.numberForIncorrectAnswer = request['numberForIncorrectAnswer']
    exam.numberOfSeats = request['numberOfSeats']

    exam.questions.clear()
    for questionId in request['questionIds']:
        exam.questions.add(
            QuestionModel.objects.get(questionId = questionId)
        )

    exam.topics.clear()
    for topicId in request['topicIds']:
        exam.topics.add(
            TopicModel.objects.get(topicId = topicId)
        )

    exam.save()


def saveExam(request: dict):
    exam = ExamModel(
        name = request['name'],
        numberForCorrectAnswer = request['numberForCorrectAnswer'],
        numberForIncorrectAnswer = request['numberForIncorrectAnswer'],
        numberOfSeats = request['numberOfSeats'],
    )

    exam.save()
    for questionId in request['questionIds']:
        exam.questions.add(
            QuestionModel.objects.get(questionId = questionId)
        )
    
    for topicId in request['topicIds']:
        exam.topics.add(
            TopicModel.objects.get(topicId = topicId)
        )



def manageExamData(data: dict):
    actionType = data['actionType']

    examInfo = {}
    examInfo["examId"] = data["examId"]
    if actionType != "DELETE":
        examInfo["name"] = data["name"]
        examInfo["numberForCorrectAnswer"] = data["numberForCorrectAnswer"]
        examInfo["numberForIncorrectAnswer"] = data["numberForIncorrectAnswer"]
        examInfo["numberOfSeats"] = data["numberOfSeats"]
        examInfo["questions"] = data["questions"]

    if actionType == "POST":
        try:
            saveExam(examInfo)
        except Exception as e:
            print(str(e))


    elif actionType == "DELETE":
        try:
            question = ExamModel.objects.get(examId = examInfo['examId'])
            question.delete()
        except Exception as e:
            print(str(e))

    elif actionType == "PUT":        
        try:        
            updateExamInfo(examInfo['examId'], examInfo)
        except Exception as e:
            print(str(e))