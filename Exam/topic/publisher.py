import pika
from . import models
import json

def publish_message(actionType, topicInfo: models.TopicModel):
    # data = json.dumps(topic.dict())
    data = {}
    data['actionType'] = actionType
    data['topicId'] = topicInfo.topicId
    if actionType == "POST" or actionType == "PUT":
        data['name'] = topicInfo.name

    print("HIHI ===> ", data, topicInfo)
    data = json.dumps(data)
    params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    channel.exchange_declare(exchange='topic', exchange_type='fanout')
    channel.basic_publish(exchange='topic', routing_key='', body=data)
    connection.close()