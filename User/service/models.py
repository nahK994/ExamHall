from django.db import models

class UserModel(models.Model):
    userId = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=40)