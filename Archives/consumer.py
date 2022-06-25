import pika
import time
import json

import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Archives.settings")
django.setup()
from service.models import UserModel
from service.views import manageUserData

while True:
    try:
        params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
        connection = pika.BlockingConnection(params)
        channel = connection.channel()

        channel.exchange_declare(exchange='user', exchange_type='fanout')
        channel.queue_declare(queue='archives_queue', exclusive=True)
        channel.queue_bind(exchange='user', queue='archives_queue')
        print("archives consumer online")
        break
    except:
        print("archives consumer failed")
        time.sleep(3)

def callback(ch, method, properties, body):
    data = json.loads(body.decode('ASCII'))
    #print("Update user_name ==> ", data)
    # print("Update ==> ", data["actionType"])

    # userInfo = UserModel(
    #     userId = data["userId"],
    #     email = data["email"],
    #     name = data["name"],
    #     password = data["password"]
    # )
    # manageUserData(data['actionType'], userInfo)
    manageUserData(data)


channel.basic_consume(queue='archives_queue', on_message_callback=callback, auto_ack=True)

print("archives consumer")
print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()