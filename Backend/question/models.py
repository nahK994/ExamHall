from django.db import models
from user.models import UserModel


class SubjectModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} ({self.id})"

    class Meta:
        db_table = 'subjects'


class ChapterModel(models.Model):
    name = models.CharField(max_length=100)
    subject = models.ForeignKey(SubjectModel, related_name='chapters', on_delete=models.DO_NOTHING, null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.id})"

    class Meta:
        db_table = 'chapters'


class ReferenceExam(models.Model):
    category_choices = [
        ("BCS", "BCS"),
        ("PRIMARY_SCHOOL", "PRIMARY_SCHOOL")
    ]

    exam_name = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=category_choices)

    def __str__(self):
        return f"{self.exam_name} ({self.category}) ({self.id})"

    class Meta:
        db_table = 'reference_exams'


class QuestionModel(models.Model):
    question_text = models.CharField(max_length=1000)
    option1 = models.CharField(max_length=1000, null=True, blank=True)
    option2 = models.CharField(max_length=1000, null=True, blank=True)
    option3 = models.CharField(max_length=1000, null=True, blank=True)
    option4 = models.CharField(max_length=1000, null=True, blank=True)
    option5 = models.CharField(max_length=1000, null=True, blank=True)
    option6 = models.CharField(max_length=1000, null=True, blank=True)
    answer = models.CharField(max_length=1000)
    explaination = models.TextField(blank=True)
    chapter = models.ForeignKey(ChapterModel, related_name="questions", on_delete=models.DO_NOTHING, null=True, blank=True)
    reference = models.ForeignKey(ReferenceExam, related_name="questions", on_delete=models.DO_NOTHING, null=True, blank=True)
    archived_by_users = models.ManyToManyField(UserModel, blank=True)

    def __str__(self):
        return f"{self.question_text} ({self.id})"

    class Meta:
        db_table = 'questions'
