from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from question.models import QuestionModel
from exam.models import ExamModel

from .models import ResultModel, UserDetailedResultInfoModel, UserResultInfoModel
from .serializers import UserResultInfoSerializer


@api_view(['GET'])
def getAllUserRank(request, exam_id):
    try:
        rankList = UserResultInfoModel.objects.filter(exam = exam_id).order_by('-totalMarks')
        serializer = UserResultInfoSerializer(rankList.values(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def getUserResult(request, user_id, exam_id):
    try:
        rankList = UserDetailedResultInfoModel.objects.filter(exam = exam_id, userId = user_id)
        serializer = UserDetailedResultInfoModel(rankList.values(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['POST'])
def createResult(request, exam_id, user_id):
    answerSheet = request.data['answerSheet']
    exam: ExamModel = ExamModel.objects.get(examId = exam_id)
    topicWiseResult = {}
    
    for topicId in ExamModel.objects.get(examId = exam_id).topics:
        topicWiseResult[topicId] = UserDetailedResultInfo()

    for userAnswer in answerSheet:
        questionId = userAnswer['questionId']
        answer = userAnswer['answer']
        question: QuestionModel = QuestionModel.objects.get(questionId = questionId)
        if question.answer == answer:
            topicWiseResult[question.topic].numberOfCorrectAnswer = topicWiseResult[question.topic].numberOfCorrectAnswer+1
        else:
            topicWiseResult[question.topic].numberOfIncorrectAnswer = topicWiseResult[question.topic].numberOfIncorrectAnswer+1


    userTotalMarks: int = 0
    for topicId in ExamModel.objects.get(examId = exam_id).topics:
        numberForCorrectAnswer = exam.numberForCorrectAnswer
        numberForIncorrectAnswer = exam.numberForIncorrectAnswer
        numberOfCorrectAnswer = topicWiseResult[topicId].numberOfCorrectAnswer
        numberOfIncorrectAnswer = topicWiseResult[topicId].numberOfIncorrectAnswer
        topicWiseResult[topicId].totalMarks = numberForCorrectAnswer*numberOfCorrectAnswer + numberForIncorrectAnswer*numberOfIncorrectAnswer

        userDetailedResultInfo = UserDetailedResultInfoModel(
            exam = exam.examId,
            userId = user_id,
            topicId = topicId,
            numberOfCorrectAnswer = numberOfCorrectAnswer,
            numberOfIncorrectAnswer = numberOfIncorrectAnswer,
            totalMarks = topicWiseResult[topicId].totalMarks
        )
        userDetailedResultInfo.save()
        userTotalMarks = userTotalMarks + topicWiseResult[topicId].totalMarks
    
    UserResultInfoModel(
        exam = exam.examId,
        userId = user_id,
        totalMarks = userTotalMarks
    ).save()

    allRankersResult = UserResultInfoModel.objects.filter(exam = exam_id).order_by('-totalMarks')[: exam.numberOfSeats]
    allRankersResultSerializer = UserResultInfoSerializer(allRankersResult.values(), many = True)

    cutMarks = allRankersResultSerializer.data[len(allRankersResultSerializer.data)-1]['totalMarks']
    result = ResultModel.objects.filter(exam = exam_id)
    if len(result.values()) == 0:
        ResultModel(
            exam = exam,
            cutMarks = cutMarks
        ).save()
    else:
        result = result.get(exam = exam_id)
        result.cutMarks = cutMarks
        result.save()
    


# @api_view(['PUT'])
# def updateResult(request, result_id):
#     pass

# @api_view(['DELETE'])
# def deleteResult(request, result_id):
#     pass

class UserDetailedResultInfo:
    numberOfCorrectAnswer: int = 0
    numberOfIncorrectAnswer: int = 0
    totalMarks: int = 0