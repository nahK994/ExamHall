from django.urls import path

from . import views

urlpatterns = [
    path('exam/<int:exam_id>/user/<int:user_id>', views.get_user_result),
    path('exam/<int:exam_id>/rank-list', views.get_all_user_rank),
    path('exam/<int:exam_id>/user/<int:user_id>/create', views.create_result),
]