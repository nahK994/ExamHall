from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/', views.getAllArchives),
    path('get/<int:archive_id>/', views.getArchive),
    path('create/', views.createArchive),
    path('<int:archive_id>/delete/', views.deleteArchive),
]