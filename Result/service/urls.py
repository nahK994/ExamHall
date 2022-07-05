from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('exam/<int:exam_id>/user/<int:user_id>/', views.getUserResult),
    path('exam/<int:exam_id>/rank-list/', views.getAllUserRank),
    path('exam/<int:exam_id>/user/<int:user_id>/create/', views.createResult),
]