# Generated by Django 4.1.1 on 2023-04-30 13:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exam', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exammodel',
            name='topics',
        ),
    ]
