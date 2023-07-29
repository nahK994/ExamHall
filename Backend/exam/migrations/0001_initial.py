# Generated by Django 4.1.1 on 2023-07-29 17:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
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
            options={
                'db_table': 'exams',
            },
        ),
        migrations.CreateModel(
            name='ResultModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number_of_correct_answer', models.FloatField(default=0)),
                ('number_of_incorrect_answer', models.FloatField(default=0)),
                ('marks', models.FloatField(default=0)),
                ('exam', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exam.exammodel')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='question.subjectmodel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ExamParticipantModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='not started', max_length=20)),
                ('exam_start_time', models.DateTimeField()),
                ('exam_end_time', models.DateTimeField(default=None, null=True)),
                ('exam', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exam.exammodel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'exam_participants',
            },
        ),
    ]
