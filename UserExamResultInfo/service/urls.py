from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getUserExamResult),
    path('get/<int:id>/', views.getUserExamResult),
    path('create/', views.createUserExamResult),
    path('<int:id>/update/', views.updateUserExamResult),
    path('<int:id>/delete/', views.deleteUserExamResult),
]