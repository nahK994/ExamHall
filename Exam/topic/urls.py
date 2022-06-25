from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllTopic),
    path('get/<int:topic_id>/', views.getTopic),
    path('create/', views.createTopic),
    path('<int:topic_id>/update/', views.updateTopic),
    path('<int:topic_id>/delete/', views.deleteTopic),
]