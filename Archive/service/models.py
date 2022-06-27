from django.db import models

# Create your models here.
# class QuestionModel(models.Model):
#     questionId = models.BigIntegerField(primary_key=True)
#     questionText = models.CharField(max_length=100, default=None)
#     option1 = models.CharField(max_length=100, default=None)
#     option2 = models.CharField(max_length=100, default=None)
#     option3 = models.CharField(max_length=100, default=None)
#     option4 = models.CharField(max_length=100, default=None)
#     option5 = models.CharField(max_length=100, default=None)
#     option6 = models.CharField(max_length=100, default=None)
#     answer = models.CharField(max_length=100, default=None)
#     explaination = models.CharField(max_length=500, default=None)
#     topicId = models.BigIntegerField(default=None)

# class UserModel(models.Model):
#     userId = models.BigIntegerField(primary_key=True)
#     name = models.CharField(max_length=50)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=40)
#     questions = models.ManyToManyField(QuestionModel, related_name="users")