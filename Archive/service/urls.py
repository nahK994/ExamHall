from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/user/<int:user_id>/', views.getUserArchivedQuestions),
    path('create/user/<int:user_id>/question/<int:question_id>/', views.createArchive),
    path('delete/user/<int:user_id>/question/<int:question_id>/', views.deleteUserArchive),
]