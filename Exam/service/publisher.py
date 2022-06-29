import pika
from . import models
import json

def publish_message(actionType, examInfo: models.ExamModel):
    # data = json.dumps(exam.dict())
    data = {}
    data['actionType'] = actionType
    data['examId'] = examInfo.examId
    if actionType == "POST" or actionType == "PUT":
        data['name'] = examInfo.name
        data['numberForCorrectAnswer'] = examInfo.numberForCorrectAnswer
        data['numberForIncorrectAnswer'] = examInfo.numberForIncorrectAnswer
        data['numberOfSeats'] = examInfo.numberOfSeats
        data['questions'] = examInfo.questions
        data['name'] = examInfo.topics

    print("HIHI ===> ", data, examInfo)
    data = json.dumps(data)
    params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    channel.exchange_declare(exchange='exam', exchange_type='fanout')
    channel.basic_publish(exchange='exam', routing_key='', body=data)
    connection.close()