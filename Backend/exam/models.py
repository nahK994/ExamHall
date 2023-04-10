from django.db import models
from topic.models import TopicModel
from question.models import QuestionModel


class ExamModel(models.Model):
    exam_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    number_for_correct_answer = models.IntegerField(default=0)
    number_for_incorrect_answer = models.FloatField(default=0)
    number_of_seats = models.IntegerField(default=0)
    questions = models.ManyToManyField(QuestionModel, related_name="exams")
    topics = models.ManyToManyField(TopicModel, related_name="exams")

    def __str__(self):
        return f"{self.name} ({self.examId})"

    def validate_number_for_incorrect_answer(self, number_for_incorrect_answer):
        if number_for_incorrect_answer > 1:
            raise ValueError("Number for incorrect answer must less than 0")
        return number_for_incorrect_answer
