# Generated by Django 4.2.11 on 2024-10-09 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('question', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionmodel',
            name='option1',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option2',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option3',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option4',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option5',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option6',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
