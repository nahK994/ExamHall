from django.db import models

class TopicModel(models.Model):
    topicId = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)