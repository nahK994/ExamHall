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


@api_view(['POST'])
def createTopic(request):
    try:
        topic = TopicSerializer(data = request.data)
        if topic.is_valid():
            topic.save()
        createdTopic = TopicModel.objects.get(name = request.data['name'])
        return Response(createdTopic, status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
def updateTopic(request, topic_id):
    try:        
        topic = TopicModel.objects.get(topicId = topic_id)
        serializer = TopicSerializer(topic, data = request.data)

        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_403_FORBIDDEN)

@api_view(['DELETE'])
def deleteTopic(request, topic_id):
    try:
        topic = TopicModel.objects.get(topicId = topic_id)
        topic.delete()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)