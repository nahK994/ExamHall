from django.contrib import admin

from .models import ExamModel, ExamParticipantModel

admin.site.register(ExamModel)
admin.site.register(ExamParticipantModel)
