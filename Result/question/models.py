from django.db import models

from topic.models import TopicModel

# Create your models here.
class QuestionModel(models.Model):
    questionId = models.BigIntegerField(primary_key=True)
    questionText = models.CharField(max_length=100)
    option1 = models.CharField(max_length=100, null=True)
    option2 = models.CharField(max_length=100, null=True)
    option3 = models.CharField(max_length=100, null=True)
    option4 = models.CharField(max_length=100, null=True)
    option5 = models.CharField(max_length=100, null=True)
    option6 = models.CharField(max_length=100, null=True)
    answer = models.CharField(max_length=100)
    explaination = models.CharField(max_length=500)
    topic = models.ForeignKey(TopicModel, related_name="questions", on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.questionText} ({self.questionId})"