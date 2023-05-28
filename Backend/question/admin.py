from django.contrib import admin

from .models import QuestionModel, SubjectModel, QuestionBankModel

admin.site.register(QuestionModel)
admin.site.register(SubjectModel)
admin.site.register(QuestionBankModel)
