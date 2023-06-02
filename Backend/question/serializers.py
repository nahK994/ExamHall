from rest_framework import serializers
from .models import QuestionModel, SubjectModel, QuestionBankModel


class QuestionSerializer(serializers.ModelSerializer):
    questionText = serializers.CharField(source='question_text')
    questionId = serializers.IntegerField(source='id', required=False)
    subjectId = serializers.IntegerField()

    class Meta:
        model = QuestionModel
        fields = ['questionId', 'questionText', 'explaination', 'subject', 'answer',
                  'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'subjectId']

    def validate(self, attrs):
        filtered_subject = SubjectModel.objects.filter(id=attrs['subjectId'])
        if not filtered_subject:
            raise serializers.ValidationError('no such subject')

        attrs['subject'] = filtered_subject[0]
        return attrs

    def create(self, validated_data):
        del validated_data['subjectId']
        question = QuestionModel(**validated_data)
        question.save()
        return question

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
            "subjectId": instance.subject.id if instance.subject is not None else None,
            "explaination": instance.explaination
        }

        return data


class QuestionReferenceSerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')

    class Meta:
        model = QuestionBankModel
        fields = ['id', 'examName', 'category']


class QuestionInfoSerializer(serializers.ModelSerializer):
    questionId = serializers.IntegerField(source='id')
    questionText = serializers.CharField(source='question_text')
    reference = QuestionReferenceSerializer()

    class Meta:
        model = QuestionModel
        fields = ['questionId', 'questionText', 'explaination', 'answer', 'reference',
                  'option1', 'option2', 'option3', 'option4', 'option5', 'option6']


class SubjectQuerySerializer(serializers.ModelSerializer):
    questions = QuestionInfoSerializer(many=True)
    subjectId = serializers.IntegerField(source='id')

    class Meta:
        model = SubjectModel
        fields = ['subjectId', 'name', 'questions']


class SubjectSerializer(serializers.ModelSerializer):
    subjectId = serializers.IntegerField(source='id')

    class Meta:
        model = SubjectModel
        fields = ['subjectId', 'name']


class QuestionBankSerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')

    class Meta:
        model = QuestionBankModel
        fields = ['id', 'examName', 'category']


class QuestionBankQuerySerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')
    questions = QuestionSerializer(many=True)

    class Meta:
        model = QuestionBankModel
        fields = ['id', 'examName', 'category', 'questions']
