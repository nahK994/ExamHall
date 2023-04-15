from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions

from .models import TopicModel
from .serializers import TopicSerializer, TopicQuerySerializer


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_all_topic(request):
    topics = TopicModel.objects.prefetch_related('questions')
    serializer = TopicQuerySerializer(topics, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_topic(request, topic_id):
    topic = TopicModel.objects.get(topicId=topic_id)
    serialized_topic = TopicQuerySerializer(topic)
    return Response(serialized_topic.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
def create_topic(request):
    serialized_topic = TopicSerializer(data=request.data)
    if serialized_topic.is_valid():
        topic_obj = serialized_topic.save()
    else:
        return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)

    return Response(topic_obj.topic_id, status=status.HTTP_201_CREATED)


@api_view(['PUT'])
@permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
def update_topic(request, topic_id):
    filtered_topic = TopicModel.objects.filter(topicId=topic_id)
    if not filtered_topic:
        return Response("no such topic", status=status.HTTP_400_BAD_REQUEST)

    serialized_topic = TopicSerializer(filtered_topic[0], data=request.data)

    if serialized_topic.is_valid():
        topic_obj = serialized_topic.save()
    return Response(topic_obj.topic_id, status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([permissions.IsAuthenticated, permissions.IsAdminUser])
def delete_topic(request, topic_id):
    try:
        topic = TopicModel.objects.get(topicId=topic_id)
        topic.delete()
        return Response("", status=status.HTTP_200_OK)
    except Exception as e:
        print(str(e))
        return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
