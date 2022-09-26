from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('<int:topic_id>/', views.get_topic),
    path('', views.get_all_topic)
]