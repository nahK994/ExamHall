from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getUserExamResultInfo),
    path('get/<int:id>/', views.getUserExamResultInfo),
    path('create/', views.createUserExamResultInfo),
    path('<int:id>/update/', views.updateUserExamResultInfo),
    path('<int:id>/delete/', views.deleteUserExamResultInfo),
]