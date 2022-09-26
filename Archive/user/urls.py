from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('<int:user_id>', views.get_user),
    path('', views.get_all_users),
    # path('create/', views.createUser),
    # path('<int:user_id>/update/', views.updateUser),
    # path('<int:user_id>/delete/', views.deleteUser),
]