from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllUser),
    # path('get/<int:user_id>/', views.getUser),
    path('create/', views.createUser),
    path('<int:user_id>/update/', views.updateUser),
    path('<int:user_id>/delete/', views.deleteUser),
]