# Generated by Django 4.0.5 on 2022-06-27 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topic', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='topicmodel',
            name='topicId',
            field=models.BigIntegerField(primary_key=True, serialize=False),
        ),
    ]
