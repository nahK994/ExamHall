from django.db import models
from topic.models import TopicModel
from user.models import UserModel
from exam.models import ExamModel


class ResultModel(models.Model):
    exam = models.ForeignKey(ExamModel, on_delete=models.CASCADE)
    topic = models.ForeignKey(TopicModel, on_delete=models.CASCADE)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    number_of_correct_answer = models.FloatField(default=0)
    number_of_incorrect_answer = models.FloatField(default=0)
    marks = models.FloatField(default=0)

    def __str__(self):
        return f"{self.user.name} => {self.marks}"
