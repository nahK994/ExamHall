import pika
import time
import json

import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Archive.settings")
django.setup()

from topic.views import manageTopicData
from question.views import manageQuestionData
from user.views import manageUserData

while True:
    try:
        params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
        connection = pika.BlockingConnection(params)
        channel = connection.channel()

        channel.exchange_declare(exchange='user', exchange_type='fanout')
        channel.queue_declare(queue='archive_user', exclusive=True)
        channel.queue_bind(exchange='user', queue='archive_user')
        print("archive user consumer online")


        channel.exchange_declare(exchange='question', exchange_type='fanout')
        channel.queue_declare(queue='archive_question', exclusive=True)
        channel.queue_bind(exchange='question', queue='archive_question')
        print("archive question consumer online")


        channel.exchange_declare(exchange='topic', exchange_type='fanout')
        channel.queue_declare(queue='archive_topic', exclusive=True)
        channel.queue_bind(exchange='topic', queue='archive_topic')
        print("archive topic consumer online")
        break
    except:
        print("archive consumer failed")
        time.sleep(3)


def userInfoCallback(ch, method, properties, body):
    data = json.loads(body.decode('ASCII'))
    print("user ==> ", data)
    manageUserData(data)

def questionInfoCallback(ch, method, properties, body):
    data = json.loads(body.decode('ASCII'))
    print("question ==> ", data)
    manageQuestionData(data)

def topicInfoCallback(ch, method, properties, body):
    data = json.loads(body.decode('ASCII'))
    print("topic ==> ", data)
    manageTopicData(data)

channel.basic_consume(queue='archive_user', on_message_callback=userInfoCallback, auto_ack=True)
channel.basic_consume(queue='archive_question', on_message_callback=questionInfoCallback, auto_ack=True)
channel.basic_consume(queue='archive_topic', on_message_callback=topicInfoCallback, auto_ack=True)

print("archive consumer")
print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()