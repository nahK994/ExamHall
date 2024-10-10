from django.contrib import admin

from .models import ExamModel, ExamParticipantModel, ResultModel

admin.site.register(ExamModel)
admin.site.register(ExamParticipantModel)
admin.site.register(ResultModel)
