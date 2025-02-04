# Generated by Django 4.1.1 on 2023-07-29 17:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ChapterModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'chapters',
            },
        ),
        migrations.CreateModel(
            name='ReferenceExam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exam_name', models.CharField(max_length=200)),
                ('category', models.CharField(choices=[('BCS', 'BCS'), ('PRIMARY_SCHOOL', 'PRIMARY_SCHOOL')], max_length=50)),
            ],
            options={
                'db_table': 'reference_exams',
            },
        ),
        migrations.CreateModel(
            name='SubjectModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'subjects',
            },
        ),
        migrations.CreateModel(
            name='QuestionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.CharField(max_length=1000)),
                ('option1', models.CharField(max_length=1000, null=True)),
                ('option2', models.CharField(max_length=1000, null=True)),
                ('option3', models.CharField(max_length=1000, null=True)),
                ('option4', models.CharField(max_length=1000, null=True)),
                ('option5', models.CharField(max_length=1000, null=True)),
                ('option6', models.CharField(max_length=1000, null=True)),
                ('answer', models.CharField(max_length=1000)),
                ('explaination', models.TextField(blank=True)),
                ('archived_by_users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('chapter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='questions', to='question.chaptermodel')),
                ('reference', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='questions', to='question.referenceexam')),
            ],
            options={
                'db_table': 'questions',
            },
        ),
        migrations.AddField(
            model_name='chaptermodel',
            name='subject',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='chapters', to='question.subjectmodel'),
        ),
    ]
