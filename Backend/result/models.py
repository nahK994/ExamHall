from django.db import models
from topic.models import TopicModel
from user.models import UserModel
from exam.models import ExamModel


class ResultModel(models.Model):
    exam = models.ForeignKey(ExamModel, on_delete=models.CASCADE)
    topicId = models.ForeignKey(TopicModel, on_delete=models.CASCADE)
    userId = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    numberOfCorrectAnswer = models.BigIntegerField()
    numberOfIncorrectAnswer = models.BigIntegerField()
    totalMarks = models.BigIntegerField()

    def __str__(self):
        return f"{self.userId.name} => {self.totalMarks}"
