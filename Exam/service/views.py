from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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


@api_view(['POST'])
def createExam(request):
    try:
        exam = ExamSerializer(data = request.data)
        if exam.is_valid():
            exam.save()
        return Response(exam.data, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def updateExam(request, exam_id):
    try:        
        exam = ExamModel.objects.get(examId = exam_id)
        serializer = ExamSerializer(exam, data = request.data)

        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)

@api_view(['DELETE'])
def deleteExam(request, exam_id):
    try:
        exam = ExamModel.objects.get(examId = exam_id)
        exam.delete()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)