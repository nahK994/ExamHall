from django.contrib import admin

from .models import QuestionModel, SubjectModel

admin.site.register(QuestionModel)
admin.site.register(SubjectModel)