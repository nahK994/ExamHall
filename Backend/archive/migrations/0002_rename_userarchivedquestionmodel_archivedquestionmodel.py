# Generated by Django 4.1.1 on 2023-04-04 16:18

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('question', '0002_rename_questionid_questionmodel_question_id_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('archive', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserArchivedQuestionModel',
            new_name='ArchivedQuestionModel',
        ),
    ]
