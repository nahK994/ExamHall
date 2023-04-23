from django.db import models

from topic.models import TopicModel
from user.models import UserModel


# Create your models here.
class QuestionModel(models.Model):
    question_text = models.CharField(max_length=100)
    option1 = models.CharField(max_length=100, null=True)
    option2 = models.CharField(max_length=100, null=True)
    option3 = models.CharField(max_length=100, null=True)
    option4 = models.CharField(max_length=100, null=True)
    option5 = models.CharField(max_length=100, null=True)
    option6 = models.CharField(max_length=100, null=True)
    answer = models.CharField(max_length=100)
    explaination = models.CharField(max_length=500)
    topic = models.ForeignKey(TopicModel, related_name="questions", on_delete=models.CASCADE)
    archived_by_users = models.ManyToManyField(UserModel)

    def __str__(self):
        return f"{self.question_text} ({self.id})"