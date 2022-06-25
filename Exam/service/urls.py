from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllExam),
    path('get/<int:exam_id>/', views.getExam),
    path('create/', views.createExam),
    path('<int:exam_id>/update/', views.updateExam),
    path('<int:exam_id>/delete/', views.deleteExam),
]