from rest_framework import serializers
from .models import QuestionModel, SubjectModel, QuestionBankModel


class QuestionSerializer(serializers.ModelSerializer):
    questionText = serializers.CharField(source='question_text')

    class Meta:
        model = QuestionModel
        fields = ['questionText', 'explaination', 'subject', 'answer',
                  'option1', 'option2', 'option3', 'option4', 'option5', 'option6']


class QuestionBankSerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')

    class Meta:
        model = QuestionBankModel
        fields = ['examName']


class QuestionBankQuerySerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')

    class Meta:
        model = QuestionBankModel
        fields = ['id', 'examName']


class QuestionQuerySerializer(serializers.ModelSerializer):
    questionId = serializers.IntegerField(source='id', required=False)
    questionText = serializers.CharField(source='question_text')
    reference = QuestionBankQuerySerializer()

    class Meta:
        model = QuestionModel
        fields = ['questionId', 'questionText', 'explaination', 'answer', 'subject', 'reference',
                  'option1', 'option2', 'option3', 'option4', 'option5', 'option6']


class SubjectQuerySerializer(serializers.ModelSerializer):
    questions = QuestionQuerySerializer(many=True)
    subjectId = serializers.IntegerField(source='id')

    class Meta:
        model = SubjectModel
        fields = ['subjectId', 'name', 'questions']


class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubjectModel
        fields = ['name']
