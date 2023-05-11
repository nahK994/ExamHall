from django.db import models


# Create your models here.
class ClassModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name} ({self.id})"

    class Meta:
        db_table = 'classes'


class LectureModel(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    serial = models.IntegerField(default=0)
    class_info = models.ForeignKey(ClassModel, related_name="lectures", on_delete=models.CASCADE)
    handnote = models.FileField(upload_to='lectures')

    def __str__(self):
        return f"{self.title} serial={self.serial} ({self.id})"

    class Meta:
        db_table = 'lectures'
