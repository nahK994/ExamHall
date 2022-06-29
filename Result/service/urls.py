from django import views
from django.urls import path

from . import views

urlpatterns = [
    path('get/exam/<int:exam_id>/user/<int:user_id>/', views.getUserResult),
    path('get/exam/<int:exam_id>/rank-list/', views.getAllUserRank),
    path('<int:exam_id>/create/<int:user_id>', views.createResult),
    # path('<int:result_id>/update/', views.updateResult),
    # path('<int:result_id>/delete/', views.deleteResult),
]