# Generated by Django 4.0.5 on 2022-09-26 06:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('question', '0002_alter_questionmodel_questionid'),
        ('user', '0003_remove_usermodel_questions'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserArchivedQuestionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('questions', models.ManyToManyField(to='question.questionmodel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.usermodel')),
            ],
        ),
    ]
