from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllUsers),
    path('get/<int:user_id>/', views.getUser)
]