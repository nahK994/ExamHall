from rest_framework import serializers

from question.models import TopicModel
from .models import ExamModel
from question.serializers import QuestionQuerySerializer


class ExamListSerializer(serializers.ModelSerializer):
    examId = serializers.CharField(source='exam_id')

    class Meta:
        model = ExamModel
        fields = ['examId', 'name']


class ExamSerializer(serializers.ModelSerializer):
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer", min_value=1)
    numberForIncorrectAnswer = serializers.FloatField(source="number_for_incorrect_answer", max_value=0)
    numberOfSeats = serializers.IntegerField(source="number_of_seats", min_value=1)

    class Meta:
        model = ExamModel
        fields = ['name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions']


class ExamQuerySerializer(serializers.ModelSerializer):
    examId = serializers.IntegerField(source='id', required=False)
    questions = QuestionQuerySerializer(many=True, required=False)
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.IntegerField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.IntegerField(source="number_of_seats")

    class Meta:
        model = ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions']

    def to_representation(self, instance):
        data = {
            'examId': instance.id,
            'name': instance.name,
            'numberForCorrectAnswer': instance.number_for_correct_answer,
            'numberForIncorrectAnswer': instance.number_for_incorrect_answer,
            'numberOfSeats': instance.number_of_seats,
            'questions': QuestionQuerySerializer(instance.questions, many=True).data,
            'topics': []
        }

        topic_ids = []
        for q in instance.questions.all():
            if q.topic.id not in topic_ids:
                topic_ids.append(q.topic.id)

        for topic in TopicModel.objects.filter(id__in=topic_ids):
            data['topics'].append(
                {
                    'topicId': topic.id,
                    'name': topic.name
                }
            )

        return data
