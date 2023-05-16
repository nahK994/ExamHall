from django.db import models
from question.models import QuestionModel, SubjectModel
from user.models import UserModel
from utils.constants import ExamEnrollmentStatus


class ExamModel(models.Model):
    name = models.CharField(max_length=50)
    number_for_correct_answer = models.IntegerField(default=0)
    number_for_incorrect_answer = models.FloatField(default=0)
    number_of_seats = models.IntegerField(default=0)
    questions = models.ManyToManyField(QuestionModel, related_name="exams")
    date = models.DateField()
    duration = models.TimeField()

    def __str__(self):
        return f"{self.name} ({self.id})"

    class Meta:
        db_table = 'exams'


class ExamParticipantModel(models.Model):
    exam = models.ForeignKey(ExamModel, on_delete=models.CASCADE)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, default=ExamEnrollmentStatus.not_started)
    exam_start_time = models.DateTimeField()
    exam_end_time = models.DateTimeField(default=None, null=True)

    class Meta:
        db_table = 'exam_participants'


class ResultModel(models.Model):
    exam = models.ForeignKey(ExamModel, on_delete=models.CASCADE)
    subject = models.ForeignKey(SubjectModel, on_delete=models.CASCADE)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    number_of_correct_answer = models.FloatField(default=0)
    number_of_incorrect_answer = models.FloatField(default=0)
    marks = models.FloatField(default=0)

    def __str__(self):
        return f"{self.user.name} => {self.marks}"
