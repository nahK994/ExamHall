from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_all_user),
    path('<int:user_id>', views.get_user),
    path('login', views.login),
    path('create', views.create_user),
    path('<int:user_id>/update', views.update_user),
    path('<int:user_id>/delete', views.delete_user),
    path('admin', views.admin_login),
]