from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllUser),
    path('login/', views.login),
    path('get/user/<int:user_id>/', views.getUser),
    path('create/', views.createUser),
    path('user/<int:user_id>/update/', views.updateUser),
    path('user/<int:user_id>/delete/', views.deleteUser),
    path('admin/', views.admin_login),
]