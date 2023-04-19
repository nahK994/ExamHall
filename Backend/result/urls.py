from django.urls import path

from .views import *
from rest_framework import routers

#
# class OptionalSlashRouter(routers.SimpleRouter):
#     def __init__(self):
#         super().__init__()
#         self.trailing_slash = '/?'
#
#
# router = OptionalSlashRouter()
#
# router.register("exams/rank-list", ResultViewset, basename="rank-list")
# router.register("exams", UserResultViewset, basename="user-result")

urlpatterns = [
    # path('exams/<int:exam_id>', views.get_user_result),
    # path('exams/<int:exam_id>/rank-list', views.get_all_user_rank),
    # path('exams/<int:exam_id>/create', views.create_result)
]
