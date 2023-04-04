from django.db import models
from topic.models import TopicModel

from question.models import QuestionModel


class ExamModel(models.Model):
    examId = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    numberForCorrectAnswer = models.IntegerField(default=0)
    numberForIncorrectAnswer = models.IntegerField(default=0)
    numberOfSeats = models.IntegerField(default=0)
    questions = models.ManyToManyField(QuestionModel, related_name="exams")
    topics = models.ManyToManyField(TopicModel, related_name="exams")

    def __str__(self):
        return f"{self.name} ({self.examId})"
