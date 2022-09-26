from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('<int:user_id>', views.get_user),
    path('', views.get_all_users)
]