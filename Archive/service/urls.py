from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('user/<int:user_id>/question/<int:question_id>', views.create_archive),
    path('user/<int:user_id>', views.get_user_archived_questions),
    path('user/<int:user_id>/question/<int:question_id>/delete', views.delete_user_archive),
]