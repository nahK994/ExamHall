from django.db import models
from django.contrib.postgres.fields import ArrayField

from question.models import QuestionModel
from user.models import UserModel


# Create your models here.
class UserArchivedQuestionModel(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    questions = models.ManyToManyField(QuestionModel)

    def __str__(self):
        return f"{self.user.name}"
