# Generated by Django 4.0.5 on 2022-06-26 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExamModel',
            fields=[
                ('examId', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('numberForCorrectAnswer', models.IntegerField()),
                ('numberForIncorrectAnswer', models.IntegerField()),
            ],
        ),
    ]
