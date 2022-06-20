from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getUser),
    path('create/', views.createUser),
    # path('update/<int:user_id>/', views.updateUser),
]