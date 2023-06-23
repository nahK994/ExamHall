from rest_framework import serializers
from .models import QuestionModel, SubjectModel, QuestionBankModel, ChapterModel


class ReferenceSerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')

    class Meta:
        model = QuestionBankModel
        fields = ['id', 'examName', 'category']


class QuestionSerializer(serializers.ModelSerializer):
    questionText = serializers.CharField(source='question_text')
    questionId = serializers.IntegerField(source='id', required=False)
    chapterId = serializers.IntegerField()
    subjectId = serializers.IntegerField()

    class Meta:
        model = QuestionModel
        fields = ['questionId', 'questionText', 'explaination', 'chapterId', 'answer', 'reference',
                  'option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'subjectId']

    def validate(self, attrs):
        filtered_chapter = ChapterModel.objects.filter(id=attrs['chapterId'])
        if not filtered_chapter:
            raise serializers.ValidationError('no such chapter')
        
        filtered_subject = SubjectModel.objects.filter(id=attrs['subjectId'])
        if not filtered_subject:
            raise serializers.ValidationError('no such subject')
        
        chapter = filtered_chapter[0]
        subject = filtered_subject[0]
        if not (chapter in subject.chapters.all()):
            raise serializers.ValidationError('chapter does not exist in subject')

        attrs['chapter'] = filtered_chapter[0]
        return attrs

    def create(self, validated_data):
        del validated_data['chapterId']
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
            "chapterId": instance.chapter.id if instance.chapter is not None else None,
            "explaination": instance.explaination,
            "reference": ReferenceSerializer(instance.reference).data
        }

        return data


class SubjectSerializer(serializers.ModelSerializer):
    subjectId = serializers.IntegerField(source='id', required=False)

    class Meta:
        model = SubjectModel
        fields = ['subjectId', 'name']

class ChapterSerializer(serializers.ModelSerializer):
    chapterId = serializers.IntegerField(source='id')
    questions = QuestionSerializer(many=True, required=False)

    class Meta:
        model = ChapterModel
        fields = ['chapterId', 'name', 'questions']


class ChapterQuerySerializer(serializers.ModelSerializer):
    chapterId = serializers.IntegerField(source='id')
    subject = SubjectSerializer()
    questions = QuestionSerializer(many=True)

    class Meta:
        model = ChapterModel
        fields = ['chapterId', 'name', 'subject', 'questions']


class JobSolutionsSerializer(serializers.ModelSerializer):
    subjectId = serializers.IntegerField(source='id')
    chapters = ChapterSerializer(many=True)

    class Meta:
        model = SubjectModel
        fields = ['subjectId', 'name', 'chapters']


class QuestionBankSerializer(serializers.ModelSerializer):
    examName = serializers.CharField(source='exam_name')

    class Meta:
        model = QuestionBankModel
        fields = ['id', 'examName', 'category']


class SubjectQuerySerializer(serializers.ModelSerializer):

    class Meta:
        model = SubjectModel
        fields = []
    
    def to_representation(self, instance):

        response = {
            'subjectId': instance.id,
            'name': instance.name,
            'chapters': ChapterSerializer(instance.chapters.all().order_by('id'), many=True).data,
        }
        return response


class QuestionBankQuerySerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionBankModel
        fields = []
    
    def to_representation(self, instance):
        response = {
            'id': instance.id,
            'examName': instance.exam_name,
            'category': instance.category,
            'questions': QuestionSerializer(instance.questions.all().order_by('id'), many=True).data
        }

        return response


class SubjectWiseQuestionsSerializer(serializers.ModelSerializer):
    questionText = serializers.CharField(source='question_text')
    questionId = serializers.IntegerField(source='id')

    class Meta:
        model = QuestionModel
        fields = ['questionId', 'questionText', 'explaination', 'answer',
                'option1', 'option2', 'option3', 'option4', 'option5', 'option6']


class SubjectWiseAllQuestionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubjectModel
        fields = []
    
    def to_representation(self, instance):
        all_questions = []
        for chapter in instance.chapters.all():
            for question in chapter.questions.all():
                all_questions.append(question)

        response = {
            "subjectId": instance.id,
            "name": instance.name,
            "questions": SubjectWiseQuestionsSerializer(all_questions, many=True).data
        }

        return response


class SubjectWiseChaptersSerializer(serializers.ModelSerializer):
    class ChapterSerializer(serializers.ModelSerializer):
        chapterId = serializers.IntegerField(source='id')

        class Meta:
            model = ChapterModel
            fields = ['chapterId', 'name']

    class Meta:
        model = SubjectModel
        fields = []
    
    def to_representation(self, instance):
        response = {
            "subjectId": instance.id,
            "name": instance.name,
            "chapters": self.ChapterSerializer(instance.chapters.all(), many=True).data
        }

        return response
