# Generated by Django 4.2.11 on 2024-10-09 16:40

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('question', '0002_alter_questionmodel_option1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionmodel',
            name='archived_by_users',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
