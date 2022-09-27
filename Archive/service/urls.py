from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('users/<int:user_id>/questions/<int:question_id>', views.create_archive),
    path('users/<int:user_id>', views.get_user_archived_questions),
    path('users/<int:user_id>/questions/<int:question_id>/delete', views.delete_user_archive),
]