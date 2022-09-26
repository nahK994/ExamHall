from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from topic.models import TopicModel
from question.models import QuestionModel

from .models import ExamModel
from .serializers import ExamSerializer, ExamListSerializer


@api_view(['GET'])
def get_all_exam(request):
    exams = ExamModel.objects.all()
    serializer = ExamListSerializer(exams, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_exam(request, exam_id):
    filtered_exam = ExamModel.objects.filter(examId=exam_id)
    if not filtered_exam:
        return Response("no such exam", status=status.HTTP_404_NOT_FOUND)
    exam = filtered_exam[0]

    serializer = ExamSerializer(exam)
    return Response(serializer.data, status=status.HTTP_200_OK)


def update_exam_info(exam_id: int, request: dict):
    exam = ExamModel.objects.get(examId=exam_id)

    exam.name = request['name']
    exam.numberForCorrectAnswer = request['numberForCorrectAnswer']
    exam.numberForIncorrectAnswer = request['numberForIncorrectAnswer']
    exam.numberOfSeats = request['numberOfSeats']

    exam.questions.clear()
    for questionId in request['questions']:
        exam.questions.add(
            QuestionModel.objects.get(questionId=questionId)
        )

    exam.topics.clear()
    for topicId in request['topics']:
        exam.topics.add(
            TopicModel.objects.get(topicId=topicId)
        )

    exam.save()


def save_exam(request: dict):
    exam = ExamModel(
        examId=request['examId'],
        name=request['name'],
        numberForCorrectAnswer=request['numberForCorrectAnswer'],
        numberForIncorrectAnswer=request['numberForIncorrectAnswer'],
        numberOfSeats=request['numberOfSeats'],
    )

    exam.save()
    for questionId in request['questions']:
        exam.questions.add(
            QuestionModel.objects.get(questionId=questionId)
        )

    for topicId in request['topics']:
        exam.topics.add(
            TopicModel.objects.get(topicId=topicId)
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
        examInfo["topics"] = data["topics"]

    if actionType == "POST":
        try:
            save_exam(examInfo)
        except Exception as e:
            print(str(e))

    elif actionType == "DELETE":
        try:
            question = ExamModel.objects.get(examId=examInfo['examId'])
            question.delete()
        except Exception as e:
            print(str(e))

    elif actionType == "PUT":
        try:
            update_exam_info(examInfo['examId'], examInfo)
        except Exception as e:
            print(str(e))
