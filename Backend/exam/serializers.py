from rest_framework import serializers
from datetime import datetime
from question.models import SubjectModel
from user.models import UserModel
from .models import ExamModel, ResultModel
from question.serializers import QuestionQuerySerializer, SubjectSerializer


class ExamListSerializer(serializers.ModelSerializer):
    examId = serializers.CharField(source='exam_id')

    class Meta:
        model = ExamModel
        fields = ['examId', 'name']


class ExamSerializer(serializers.ModelSerializer):
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer", min_value=1)
    numberForIncorrectAnswer = serializers.FloatField(source="number_for_incorrect_answer", max_value=0)
    numberOfSeats = serializers.IntegerField(source="number_of_seats", min_value=1)
    date = serializers.CharField()
    duration = serializers.CharField()

    class Meta:
        model = ExamModel
        fields = ['name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'date', 'duration']

    def validate(self, validated_data):
        validated_data['date'] = datetime.strptime(validated_data['date'], "%Y-%m-%d").date()
        validated_data['duration'] = datetime.strptime(validated_data['duration'], "%H:%M").time()
        return validated_data


class ExamQuerySerializer(serializers.ModelSerializer):
    examId = serializers.IntegerField(source='id', required=False)
    questions = QuestionQuerySerializer(many=True, required=False)
    numberForCorrectAnswer = serializers.IntegerField(source="number_for_correct_answer")
    numberForIncorrectAnswer = serializers.IntegerField(source="number_for_incorrect_answer")
    numberOfSeats = serializers.IntegerField(source="number_of_seats")

    class Meta:
        model = ExamModel
        fields = ['examId', 'name', 'numberForCorrectAnswer', 'numberForIncorrectAnswer', 'numberOfSeats',
                  'questions', 'date', 'duration']

    def to_representation(self, instance):
        data = {
            'examId': instance.id,
            'name': instance.name,
            'numberForCorrectAnswer': instance.number_for_correct_answer,
            'numberForIncorrectAnswer': instance.number_for_incorrect_answer,
            'numberOfSeats': instance.number_of_seats,
            'questions': QuestionQuerySerializer(instance.questions, many=True).data,
            'date': instance.date,
            'duration': instance.duration,
            'subjects': []
        }

        subject_ids = []
        for q in instance.questions.all():
            if q.subject.id not in subject_ids:
                subject_ids.append(q.subject.id)

        for subject in SubjectModel.objects.filter(id__in=subject_ids):
            data['subjects'].append(
                {
                    'subjectId': subject.id,
                    'name': subject.name
                }
            )

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
