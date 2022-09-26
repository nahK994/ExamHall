from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('<int:exam_id>', views.get_exam),
    path('', views.get_all_exam),
]