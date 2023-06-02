from rest_framework import serializers
from datetime import datetime
from user.models import UserModel
from .models import ExamModel, ResultModel
from question.serializers import QuestionSerializer, SubjectSerializer


class ExamListSerializer(serializers.ModelSerializer):
    examId = serializers.IntegerField(source='id')

    class Meta:
        model = ExamModel
        fields = ['examId', 'name', 'date', 'duration']


class ExamSerializer(serializers.ModelSerializer):
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
    examId = serializers.IntegerField(source='id', required=False)
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.IntegerField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.IntegerField(source="number_of_seats")

    class Meta:
        model = ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats', 'date', 'duration']

    def to_representation(self, instance):
        data = {
            'examId': instance.id,
            'name': instance.name,
            'numberForCorrectAnswer': instance.number_for_correct_answer,
            'numberForIncorrectAnswer': instance.number_for_incorrect_answer,
            'numberOfSeats': instance.number_of_seats,
            'date': instance.date,
            'duration': instance.duration,
            'subjects': []
        }

        subject_idx = {}
        index = 0
        for q in instance.questions.all():
            if q.subject.id not in subject_idx.keys():
                data['subjects'].append(
                    {
                        'subjectId': q.subject.id,
                        'name': q.subject.name,
                        'questions': [QuestionSerializer(q).data]
                    }
                )
                subject_idx[q.subject.id] = index
                index = index + 1
            else:
                data['subjects'][subject_idx[q.subject.id]]['questions'].append(QuestionSerializer(q).data)

        return data


class ExamEnrollmentSerializer(serializers.Serializer):
    examId = serializers.IntegerField()


class ExamAnswerSheetSerializer(serializers.Serializer):
    questionId = serializers.IntegerField()
    answer = serializers.CharField()


class EndExamSerializer(serializers.Serializer):
    examId = serializers.IntegerField()
    answerSheet = ExamAnswerSheetSerializer(many=True)


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
