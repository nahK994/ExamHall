import pika
from . import models
import json

def publish_message(actionType, questionInfo: models.QuestionModel):
    # data = json.dumps(question.dict())
    data = {}
    data['actionType'] = actionType
    data['questionId'] = questionInfo.questionId
    if actionType == "POST" or actionType == "PUT":
        data['questionText'] = questionInfo.questionText
        data['option1'] = questionInfo.option1
        data['option2'] = questionInfo.option2
        data['option3'] = questionInfo.option3
        data['option4'] = questionInfo.option4
        data['option5'] = questionInfo.option5
        data['option6'] = questionInfo.option6
        data['answer'] = questionInfo.answer
        data['explaination'] = questionInfo.explaination
        data['topic'] = questionInfo.topic.topicId

    print("HIHI ===> ", data, questionInfo)
    data = json.dumps(data)
    params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    channel.exchange_declare(exchange='question', exchange_type='fanout')
    channel.basic_publish(exchange='question', routing_key='', body=data)
    connection.close()