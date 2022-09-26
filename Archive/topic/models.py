from django.db import models


# Create your models here.
class TopicModel(models.Model):
    topicId = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} ({self.topicId})"
