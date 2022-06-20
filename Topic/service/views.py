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
    user = TopicModel.objects.filter(topicId = topic_id)
    serializer = TopicSerializer(user, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def createTopic(request):
    serializer = TopicSerializer(data = request.data)
    topic = TopicModel.objects.filter(name = request.data['name'])

    try:
        if len(topic):
            raise Exception("Topic has been added")

        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def updateTopic(request, topic_id):
    try:
        topic = TopicModel.objects.get(topicId = topic_id)
        serializer = TopicSerializer(topic, data = request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    except:
        return Response("", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['DELETE'])
def deleteTopic(request, topic_id):
    try:
        topic = TopicModel.objects.get(topicId = topic_id)
        topic.delete()
        return Response("", status=status.HTTP_200_OK)
    except:
        return Response("", status=status.HTTP_500_INTERNAL_SERVER_ERROR)