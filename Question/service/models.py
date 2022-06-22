from django.db import models

# Create your models here.
class QuestionModel(models.Model):
    questionId = models.BigAutoField(primary_key=True)
    questionText = models.CharField(max_length=100, default=None)
    option1 = models.CharField(max_length=100, default=None)
    option2 = models.CharField(max_length=100, default=None)
    option3 = models.CharField(max_length=100, default=None)
    option4 = models.CharField(max_length=100, default=None)
    option5 = models.CharField(max_length=100, default=None)
    option6 = models.CharField(max_length=100, default=None)
    answer = models.CharField(max_length=100, default=None)
    explaination = models.CharField(max_length=500, default=None)
    topicId = models.BigIntegerField(default=None)