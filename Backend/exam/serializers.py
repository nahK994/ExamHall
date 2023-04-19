from rest_framework import serializers
from . import models
from question.serializers import QuestionQuerySerializer
from topic.serializers import TopicQuerySerializer


class ExamListSerializer(serializers.ModelSerializer):
    examId = serializers.CharField(source='exam_id')
    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name']


class ExamSerializer(serializers.ModelSerializer):
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.FloatField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.IntegerField(source="number_of_seats")

    class Meta:
        model = models.ExamModel
        fields = ['name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'topics']
    
    def validate(self, validated_data):
        number_for_incorrect_answer = validated_data['number_for_incorrect_answer']
        number_for_correct_answer = validated_data['number_for_correct_answer']
        number_of_seats = validated_data['number_of_seats']
        if number_for_incorrect_answer > 0:
            raise serializers.ValidationError("Number for incorrect answer must less than 0")
        elif number_for_correct_answer < 0:
            raise serializers.ValidationError("Number for correct answer must greater than 0")
        elif number_of_seats < 0:
            raise serializers.ValidationError("Number for seats must greater than 0")
        return validated_data


class ExamQuerySerializer(serializers.ModelSerializer):
    examId = serializers.IntegerField(source='id', required=False)
    questions = QuestionQuerySerializer(many=True, required=False)
    topics = TopicQuerySerializer(many=True, required=False)
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.IntegerField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.IntegerField(source="number_of_seats")

    class Meta:
        model = models.ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'topics']

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

        for topic in instance.topics.all():
            data['topics'].append(
                {
                    'topicId': topic.id,
                    'name': topic.name
                }
            )

        return data
