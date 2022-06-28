from django.db import models
from topic.models import TopicModel
from user.models import UserModel
from exam.models import ExamModel

# Create your models here.
class ResultModel(models.Model):
    resultId = models.BigAutoField(primary_key=True)
    exam = models.ForeignKey(ExamModel, related_name="result", on_delete=models.CASCADE)
    cutMarks = models.BigIntegerField()

class UserResultInfoModel(models.Model):
    result = models.ForeignKey(ResultModel, related_name="userResultInfo", on_delete=models.CASCADE)
    topicId = models.ForeignKey(TopicModel, on_delete=models.CASCADE)
    userId = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    numberOfCorrectAnswer = models.BigIntegerField()
    numberOfIncorrectAnswer = models.BigIntegerField()