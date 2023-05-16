from django.contrib import admin

from .models import LectureModel, ClassModel

admin.site.register(LectureModel)
admin.site.register(ClassModel)