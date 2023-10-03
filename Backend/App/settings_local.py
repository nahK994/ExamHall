from .settings import *
import os


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'exam_hall',
        'USER': 'skhan',
        'PASSWORD': 'haha',
        'HOST': 'db',
        'PORT': '5432',
    }
}
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_APP_PASSWORD')

CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",
]
