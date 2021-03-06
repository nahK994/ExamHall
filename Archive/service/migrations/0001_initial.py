# Generated by Django 4.0.5 on 2022-06-23 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionModel',
            fields=[
                ('questionId', models.BigAutoField(primary_key=True, serialize=False)),
                ('questionText', models.CharField(default=None, max_length=100)),
                ('option1', models.CharField(default=None, max_length=100)),
                ('option2', models.CharField(default=None, max_length=100)),
                ('option3', models.CharField(default=None, max_length=100)),
                ('option4', models.CharField(default=None, max_length=100)),
                ('option5', models.CharField(default=None, max_length=100)),
                ('option6', models.CharField(default=None, max_length=100)),
                ('answer', models.CharField(default=None, max_length=100)),
                ('explaination', models.CharField(default=None, max_length=500)),
                ('topicId', models.BigIntegerField(default=None)),
            ],
        ),
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('userId', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=40)),
            ],
        ),
    ]
