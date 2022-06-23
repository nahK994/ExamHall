import pika
from . import models
import json

def publish_message(actionType, userInfo: models.UserModel):
    # data = json.dumps(user.dict())
    data = {}
    data['actionType'] = actionType
    data['userId'] = userInfo.userId
    if actionType == "POST" or actionType == "PUT":
        data['email'] = userInfo.email
        data['name'] = userInfo.name
        data['password'] = userInfo.password

    print("HIHI ===> ", data, userInfo)
    data = json.dumps(data)
    params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    channel.exchange_declare(exchange='user', exchange_type='fanout')
    channel.basic_publish(exchange='user', routing_key='', body=data)
    connection.close()