from celery import shared_task

@shared_task
def evaluate_answersheet():
    print("Cron job works")