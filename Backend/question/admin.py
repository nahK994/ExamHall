from django.contrib import admin

from .models import QuestionModel, SubjectModel, ReferenceExam, ChapterModel

admin.site.register(QuestionModel)
admin.site.register(SubjectModel)
admin.site.register(ReferenceExam)
admin.site.register(ChapterModel)
