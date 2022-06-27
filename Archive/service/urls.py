from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/<int:user_id>/user', views.getUserArchivedQuestions),
    path('create/<int:user_id>/user/<int:question_id>/question', views.createArchive),
    path('delete/<int:user_id>/user/<int:question_id>/question', views.deleteUserArchive),
]