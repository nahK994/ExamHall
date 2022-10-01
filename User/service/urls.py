from django import views
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('', views.get_all_user),
    path('login', views.login),
    path('create', views.create_user),
    path('<int:user_id>/update', views.update_user),
    path('<int:user_id>/delete', views.delete_user),
    path('<int:user_id>', views.get_user),
    path('token/refresh', TokenRefreshView.as_view())
]