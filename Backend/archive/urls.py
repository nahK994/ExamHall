from django.urls import path

from . import views

urlpatterns = [
    path('<int:question_id>/create', views.create_archive),
    path('<int:question_id>/delete', views.delete_user_archive),
    path('', views.get_user_archived_questions),
]