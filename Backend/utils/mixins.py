from rest_framework.response import Response
from rest_framework import status, permissions


class ModelManagerMixin:
    http_method_names = ["post", "get", "put", "delete"]
    permission_classes = [permissions.IsAuthenticated]

    def get_validation_errors(self, serializer):
        errors = {}
        for field_name, field_errors in serializer.errors.items():
            errors[field_name] = ', '.join(field_errors)
        return errors

    def list(self, request):
        serialized_data = self.serializer_class(self.get_queryset(), many=True, context={"request": request})
        return Response(serialized_data.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk):
        if not pk.isnumeric():
            return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)

        filtered_data = self.get_queryset().filter(pk=pk)
        if filtered_data:
            serializer = self.query_serializer_class(filtered_data[0], context={"request": request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response("Not found", status=status.HTTP_404_NOT_FOUND)

    def create(self, request):
        if not request.user.is_admin:
            return Response("not allowed", status=status.HTTP_403_FORBIDDEN)
        request_data = request.data

        serialized_info = self.get_serializer(data=request_data)
        if serialized_info.is_valid():
            instance = serialized_info.save()
            return Response(self.query_serializer_class(instance, context={"request": request}).data, status=status.HTTP_201_CREATED)

        validation_error = self.get_validation_errors(serialized_info)
        return Response(validation_error, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk, *args, **kwargs):
        if not request.user.is_admin:
            return Response("not allowed", status=status.HTTP_403_FORBIDDEN)

        if not pk.isnumeric():
            return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)

        filtered_info = self.get_queryset().filter(id=pk)
        if not filtered_info:
            return Response("No such item", status=status.HTTP_404_NOT_FOUND)

        serialized_info = self.get_serializer(filtered_info[0], data=request.data)
        if serialized_info.is_valid():
            instance = serialized_info.save()
            return Response(self.query_serializer_class(instance, context={"request": request}).data, status=status.HTTP_200_OK)

        validation_error = self.get_validation_errors(serialized_info)
        return Response(validation_error, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk):
        if not request.user.is_admin:
            return Response("not allowed", status=status.HTTP_403_FORBIDDEN)

        if not pk.isnumeric():
            return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)

        filtered_info = self.get_queryset().filter(id=pk)
        if not filtered_info:
            return Response("No such item", status=status.HTTP_404_NOT_FOUND)
        filtered_info.delete()

        return Response("Deleted successfully", status=status.HTTP_204_NO_CONTENT)
