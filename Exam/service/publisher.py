import pika

from service.serializers import ExamSerializer

from . import models
from question.serializers import QuestionSerializer
from topic.serializers import TopicSerializer
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
        data['questions'] = []
        for question in QuestionSerializer(examInfo.questions, many=True).data:
            data['questions'].append(question['questionId'])
        data['topics'] = []
        for topic in TopicSerializer(examInfo.topics, many=True).data:
            data['topics'].append(topic['topicId'])

    # print("HIHI ===> ", data, examInfo)
    data = json.dumps(data)
    params = pika.URLParameters('amqps://eykbbnzj:nytVuZcErKh3WFkY5DawOnZGKrHl9fF4@shrimp.rmq.cloudamqp.com/eykbbnzj')
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    channel.exchange_declare(exchange='exam', exchange_type='fanout')
    channel.basic_publish(exchange='exam', routing_key='', body=data)
    connection.close()