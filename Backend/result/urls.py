from django.urls import path

from . import views

urlpatterns = [
    path('exams/<int:exam_id>', views.get_user_result),
    path('exams/<int:exam_id>/rank-list', views.get_all_user_rank),
    path('exams/<int:exam_id>/create', views.create_result),
]