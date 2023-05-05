from rest_framework import serializers
from .models import ClassModel, LectureModel


class LectureSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100)
    classInfo = serializers.IntegerField(source='class_info')
    serial = serializers.IntegerField(min_value=1)

    class Meta:
        model = LectureModel
        fields = '__all__'

    def validate(self, attrs):
        filtered_class = ClassModel.objects.filter(id=attrs['class_info'])
        if not filtered_class:
            raise serializers.ValidationError('no such class')

        attrs['class_info'] = filtered_class[0]
        return attrs

    def create(self, validated_data):
        lecture = LectureModel(**validated_data)
        lecture.save()
        return lecture


class LectureQuerySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    title = serializers.CharField(max_length=100)
    handnote = serializers.FileField()

    class Meta:
        model = LectureModel
        fields = '__all__'

    def to_representation(self, instance):
        request = self.context.get('request')

        data = {
            "id": instance.id,
            "title": instance.title,
            "description": instance.description,
            "serial": instance.serial,
            "handnote": request.build_absolute_uri(instance.handnote.url)
        }
        return data


class ClassSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50)

    class Meta:
        model = ClassModel
        fields = ['name']


class ClassQuerySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    name = serializers.CharField(max_length=50)

    class Meta:
        model = ClassModel
        fields = ['id', 'name', 'lectures']

    def to_representation(self, instance):
        data = {
            "id": instance.id,
            "name": instance.name,
            "lectures": LectureQuerySerializer(instance.lectures.order_by("serial"), many=True, context={"request": self.context.get('request')}).data
        }
        return data
