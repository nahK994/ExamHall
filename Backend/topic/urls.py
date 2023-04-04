from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_all_topic),
    path('<int:topic_id>', views.get_topic),
    path('create', views.create_topic),
    path('<int:topic_id>/update', views.update_topic),
    path('<int:topic_id>/delete', views.delete_topic),
]