from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllQuestion),
    path('get/<int:question_id>/', views.getQuestion),
    # path('create/', views.createQuestion),
    # path('<int:question_id>/update/', views.updateQuestion),
    # path('<int:question_id>/delete/', views.deleteQuestion),
]