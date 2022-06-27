from django.db import models

from question.models import QuestionModel

# Create your models here.
# class QuestionModel(models.Model):
#     questionId = models.BigAutoField(primary_key=True)
#     questionText = models.CharField(max_length=100)
#     option1 = models.CharField(max_length=100)
#     option2 = models.CharField(max_length=100)
#     option3 = models.CharField(max_length=100)
#     option4 = models.CharField(max_length=100)
#     option5 = models.CharField(max_length=100)
#     option6 = models.CharField(max_length=100)
#     answer = models.CharField(max_length=100)
#     explaination = models.CharField(max_length=500)
#     topicId = models.BigIntegerField(default=None)

# class TopicModel(models.Model):
#     topicId = models.BigAutoField(primary_key=True)
#     name = models.CharField(max_length=50)

class ExamModel(models.Model):
    examId = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    numberForCorrectAnswer = models.IntegerField(default=0)
    numberForIncorrectAnswer = models.IntegerField(default=0)
    numberOfSeats = models.IntegerField(default=0)
    questions = models.ManyToManyField(QuestionModel, related_name="exams")