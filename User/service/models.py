from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)

class UserManager(BaseUserManager):
    def create_user(self, name, username, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name = name,
            username=username,
            password = password
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, name, username, email, password=None):

        user = self.create_user(
            name,
            username,
            email,
            password=password
        )

        user.is_admin = True
        user.save(using=self._db)
        return user

class UserModel(AbstractBaseUser):
    name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, null=True)
    email = models.EmailField(unique=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'username']

    def __str__(self):
        return f"{self.name} ({self.id})"

    @property
    def is_staff(self):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    def has_perm(self, perm, obj=None):
        return True