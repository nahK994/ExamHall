# Generated by Django 4.1.1 on 2023-05-09 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('question', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExamModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('number_for_correct_answer', models.IntegerField(default=0)),
                ('number_for_incorrect_answer', models.FloatField(default=0)),
                ('number_of_seats', models.IntegerField(default=0)),
                ('date', models.DateField()),
                ('duration', models.TimeField()),
                ('questions', models.ManyToManyField(related_name='exams', to='question.questionmodel')),
            ],
        ),
    ]