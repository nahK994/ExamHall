from django.contrib import admin

from .models import ResultModel, UserDetailedResultInfoModel, UserResultInfoModel

admin.site.register(ResultModel)
admin.site.register(UserDetailedResultInfoModel)
admin.site.register(UserResultInfoModel)
