from celery.schedules import crontab
import os
from celery import Celery


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "App.settings_local")

app = Celery("App")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()

app.conf.beat_schedule = {
    "evaluate_answersheet": {
        "task": "exam.tasks.evaluate_answersheet",
        "schedule": crontab(minute="*/1"),
    },
}
