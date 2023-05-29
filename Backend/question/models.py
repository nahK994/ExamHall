from django.db import models
from user.models import UserModel


class SubjectModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} ({self.id})"

    class Meta:
        db_table = 'subjects'


class QuestionBankModel(models.Model):
    category_choices = [
        ("BCS", "BCS")
    ]

    exam_name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=category_choices)

    def __str__(self):
        return f"{self.exam_name} ({self.category}) ({self.id})"

    class Meta:
        db_table = 'question_banks'


class QuestionModel(models.Model):
    question_text = models.CharField(max_length=1000)
    option1 = models.CharField(max_length=1000, null=True)
    option2 = models.CharField(max_length=1000, null=True)
    option3 = models.CharField(max_length=1000, null=True)
    option4 = models.CharField(max_length=1000, null=True)
    option5 = models.CharField(max_length=1000, null=True)
    option6 = models.CharField(max_length=1000, null=True)
    answer = models.CharField(max_length=1000)
    explaination = models.TextField(blank=True)
    subject = models.ForeignKey(SubjectModel, related_name="questions", on_delete=models.DO_NOTHING, null=True, blank=True)
    reference = models.ForeignKey(QuestionBankModel, related_name="questions", on_delete=models.DO_NOTHING, null=True, blank=True)
    archived_by_users = models.ManyToManyField(UserModel)

    def __str__(self):
        return f"{self.question_text} ({self.id})"

    class Meta:
        db_table = 'questions'
