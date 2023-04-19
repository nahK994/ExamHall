from django.urls import path
from rest_framework import routers
from . import views


# class OptionalSlashRouter(routers.SimpleRouter):
#     def __init__(self):
#         super().__init__()
#         self.trailing_slash = '/?'
#
#
# router = OptionalSlashRouter()
#
# base_topics_url = ""
# router.register(base_topics_url, views.TopicViewset, basename="topics")
#
# urlpatterns = [
#     path('', views.get_all_topic),
#     path('<int:topic_id>', views.get_topic),
#     path('create', views.create_topic),
#     path('<int:topic_id>/update', views.update_topic),
#     path('<int:topic_id>/delete', views.delete_topic),
# ] + router.urls
