from rest_framework import serializers
from datetime import datetime
from question.models import QuestionModel
from user.models import UserModel
from .models import ExamModel, ResultModel
from question.serializers import QuestionSerializer, SubjectSerializer


class ExamListSerializer(serializers.ModelSerializer):
    examId = serializers.IntegerField(source='id')

    class Meta:
        model = ExamModel
        fields = ['examId', 'name', 'date', 'duration']


class ExamCommandSerializer(serializers.ModelSerializer):
    examId = serializers.IntegerField(source='id', required=False)
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer", min_value=1)
    numberForIncorrectAnswer = serializers.FloatField(source="number_for_incorrect_answer", max_value=0)
    numberOfSeats = serializers.IntegerField(source="number_of_seats", min_value=1)
    date = serializers.CharField()
    duration = serializers.CharField()

    class Meta:
        model = ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'date', 'duration']

    def validate(self, validated_data):
        validated_data['date'] = datetime.strptime(validated_data['date'], "%Y-%m-%d").date()
        validated_data['duration'] = datetime.strptime(validated_data['duration'], "%H:%M").time()
        return validated_data


class ExamQuerySerializer(serializers.ModelSerializer):

    class QuestionSerializer(serializers.ModelSerializer):
        class Meta:
            model = QuestionModel
            fields = []

        def to_representation(self, instance):
            data = {
                "questionId": instance.id,
                "questionText": instance.question_text,
                "option1": instance.option1,
                "option2": instance.option2,
                "option3": instance.option3,
                "option4": instance.option4,
                "option5": instance.option5,
                "option6": instance.option6,
                "answer": instance.answer,
                "chapterId": instance.chapter.id if instance.chapter is not None else None,
                "explaination": instance.explaination
            }

            return data

    class Meta:
        model = ExamModel
        fields = []

    def to_representation(self, instance):
        data = {
            'examId': instance.id,
            'name': instance.name,
            'numberForCorrectAnswer': instance.number_for_correct_answer,
            'numberForIncorrectAnswer': instance.number_for_incorrect_answer,
            'numberOfSeats': instance.number_of_seats,
            'date': instance.date,
            'duration': instance.duration,
            'questions': self.QuestionSerializer(instance.questions.all(), many=True).data
        }
        return data


class ExamEnrollmentSerializer(serializers.Serializer):
    examId = serializers.IntegerField()


class AnswerSheetSerializer(serializers.Serializer):
    questionId = serializers.IntegerField()
    answer = serializers.CharField()


class EndExamSerializer(serializers.Serializer):
    examId = serializers.IntegerField()
    answerSheet = AnswerSheetSerializer(many=True)


class ResultSerializer(serializers.ModelSerializer):
    numberOfCorrectAnswer = serializers.FloatField(source='number_of_correct_answer')
    numberOfIncorrectAnswer = serializers.FloatField(source='number_of_incorrect_answer')
    subject = SubjectSerializer()

    class Meta:
        model = ResultModel
        fields = ['subject', 'numberOfCorrectAnswer', 'numberOfIncorrectAnswer', 'marks']

    def to_representation(self, instance):
        return {
            'subject': instance.subject.name,
            'numberOfCorrectAnswer': instance.number_of_correct_answer,
            'numberOfIncorrectAnswer': instance.number_of_incorrect_answer,
            'marks': instance.marks
        }


class RankListSerializer(serializers.ModelSerializer):
    totalMarks = serializers.FloatField(source='total_marks')

    class Meta:
        model = UserModel
        fields = ['name', 'totalMarks']
