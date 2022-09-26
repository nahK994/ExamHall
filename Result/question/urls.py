from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('<int:question_id>', views.get_question),
    path('', views.get_all_question)
]