from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import TopicModel
from .serializers import TopicSerializer

@api_view(['GET'])
def getAllTopic(request):
    topics = TopicModel.objects.all()
    serializer = TopicSerializer(topics, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTopic(request, topic_id):
    topic = TopicModel.objects.get(topicId = topic_id)
    serializer = TopicSerializer(topic, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



def manageTopicData(data: dict):
    actionType = data['actionType']

    topicInfo = {}
    topicInfo["topicId"] = data["topicId"] 
    if actionType != "DELETE":
        topicInfo["name"] = data["name"]

    if actionType == "POST":
        try:
            topic = TopicModel(
                topicId = topicInfo["topicId"],
                name = topicInfo["name"]
            )
            topic.save()
        except Exception as e:
            print(str(e))


    elif actionType == "DELETE":
        try:
            topic = TopicModel.objects.get(topicId = topicInfo['topicId'])
            topic.delete()
        except Exception as e:
            print(str(e))

    elif actionType == "PUT":        
        try:        
            topic = TopicModel.objects.get(topicId = topicInfo["topicId"])
            topic.name = topicInfo["name"]
            topic.save()
        except Exception as e:
            print(str(e))