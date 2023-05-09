from django.db import models
from question.models import QuestionModel


class ExamModel(models.Model):
    name = models.CharField(max_length=50)
    number_for_correct_answer = models.IntegerField(default=0)
    number_for_incorrect_answer = models.FloatField(default=0)
    number_of_seats = models.IntegerField(default=0)
    questions = models.ManyToManyField(QuestionModel, related_name="exams")
    date = models.DateField()
    duration = models.TimeField()

    def __str__(self):
        return f"{self.name} ({self.id})"
