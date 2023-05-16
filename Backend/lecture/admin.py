from django.contrib import admin

from .models import LectureModel, CourseModel

admin.site.register(LectureModel)
admin.site.register(CourseModel)
