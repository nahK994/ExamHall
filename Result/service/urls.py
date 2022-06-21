from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllResult),
    path('get/<int:result_id>/', views.getResult),
    path('create/', views.createResult),
    path('<int:result_id>/update/', views.updateResult),
    path('<int:result_id>/delete/', views.deleteResult),
]