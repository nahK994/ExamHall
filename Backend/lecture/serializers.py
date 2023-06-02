from rest_framework import serializers
from .models import CourseModel, LectureModel


class LectureSerializer(serializers.ModelSerializer):
    lectureId = serializers.IntegerField(source='id', required=False)
    title = serializers.CharField(max_length=100)
    courseId = serializers.IntegerField()
    serial = serializers.IntegerField(min_value=1)
    handnote = serializers.FileField()

    class Meta:
        model = LectureModel
        fields = ['lectureId', 'title', 'courseId', 'serial', 'handnote']

    def validate(self, attrs):
        filtered_course = CourseModel.objects.filter(id=attrs['courseId'])
        if not filtered_course:
            raise serializers.ValidationError('no such course')

        attrs['course'] = filtered_course[0]
        return attrs

    def create(self, validated_data):
        del validated_data['courseId']
        lecture = LectureModel(**validated_data)
        lecture.save()
        return lecture

    def to_representation(self, instance):
        request = self.context.get('request')

        data = {
            "lectureId": instance.id,
            "title": instance.title,
            "description": instance.description,
            "serial": instance.serial,
            "handnote": request.build_absolute_uri(instance.handnote.url)
        }
        return data


class LectureQuerySerializer(serializers.ModelSerializer):

    class Meta:
        model = LectureModel
        fields = []

    def to_representation(self, instance):
        request = self.context.get('request')

        data = {
            "lectureId": instance.id,
            "title": instance.title,
            "description": instance.description,
            "serial": instance.serial,
            "handnote": request.build_absolute_uri(instance.handnote.url)
        }
        return data


class CourseSerializer(serializers.ModelSerializer):
    courseId = serializers.IntegerField(source='id', required=False)
    name = serializers.CharField(max_length=50)

    class Meta:
        model = CourseModel
        fields = ['courseId', 'name']


class CourseQuerySerializer(serializers.ModelSerializer):
    courseId = serializers.IntegerField(source='id', required=False)
    name = serializers.CharField(max_length=50)

    class Meta:
        model = CourseModel
        fields = ['courseId', 'name']

    def to_representation(self, instance):
        data = {
            "id": instance.id,
            "name": instance.name,
            "lectures": LectureQuerySerializer(instance.lectures.order_by("serial"), many=True, context={"request": self.context.get('request')}).data
        }
        return data
