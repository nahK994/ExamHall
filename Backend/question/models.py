from django.db import models
from user.models import UserModel


class SubjectModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} ({self.id})"

    class Meta:
        db_table = 'topics'


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
    subject = models.ForeignKey(SubjectModel, related_name="questions", on_delete=models.CASCADE)
    archived_by_users = models.ManyToManyField(UserModel)

    def __str__(self):
        return f"{self.question_text} ({self.id})"

    class Meta:
        db_table = 'questions'
