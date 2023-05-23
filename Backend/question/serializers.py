from rest_framework import serializers
from .models import QuestionModel, SubjectModel


class QuestionSerializer(serializers.ModelSerializer):
    questionText = serializers.CharField(source='question_text')

    class Meta:
        model = QuestionModel
        fields = ['questionText', 'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'explaination',
                  'subject', 'answer']


class QuestionQuerySerializer(serializers.ModelSerializer):
    questionId = serializers.IntegerField(source='id', required=False)
    questionText = serializers.CharField(source='question_text')

    class Meta:
        model = QuestionModel
        fields = ['questionId', 'questionText', 'option1', 'option2', 'option3', 'option4', 'option5', 'option6',
                  'explaination', 'answer']


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
