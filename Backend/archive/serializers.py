from question.models import SubjectModel
from question.serializers import SubjectWiseQuestionsSerializer
from rest_framework import serializers


class ArchiveSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubjectModel
        fields = []
    
    def to_representation(self, instance):
        request = self.context.get('request')
        all_questions = []
        for chapter in instance.chapters.all():
            for question in chapter.questions.filter(archived_by_users__in=[request.user]).all():
                all_questions.append(question)

        response = {
            "subjectId": instance.id,
            "name": instance.name,
            "questions": SubjectWiseQuestionsSerializer(all_questions, many=True).data
        }

        return response
