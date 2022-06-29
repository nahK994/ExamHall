# Generated by Django 4.0.5 on 2022-06-26 17:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('topic', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionModel',
            fields=[
                ('questionId', models.BigAutoField(primary_key=True, serialize=False)),
                ('questionText', models.CharField(max_length=100)),
                ('option1', models.CharField(max_length=100)),
                ('option2', models.CharField(max_length=100)),
                ('option3', models.CharField(max_length=100)),
                ('option4', models.CharField(max_length=100)),
                ('option5', models.CharField(max_length=100)),
                ('option6', models.CharField(max_length=100)),
                ('answer', models.CharField(max_length=100)),
                ('explaination', models.CharField(max_length=500)),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='topic.topicmodel')),
            ],
        ),
    ]