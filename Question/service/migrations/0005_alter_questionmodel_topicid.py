# Generated by Django 4.0.5 on 2022-06-22 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0004_alter_questionmodel_answer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionmodel',
            name='topicId',
            field=models.BigIntegerField(default=None),
        ),
    ]
