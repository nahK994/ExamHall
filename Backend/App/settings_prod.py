from .settings import *
from dotenv import load_dotenv
load_dotenv(dotenv_path='../.env')
import os

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_APP_PASSWORD')

CORS_ALLOWED_ORIGINS = [
    "https://nahk994.github.io"
]
