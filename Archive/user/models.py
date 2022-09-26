from django.db import models


# Create your models here.
class UserModel(models.Model):
    userId = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=40)

    def __str__(self):
        return f"{self.name} ({self.userId})"
