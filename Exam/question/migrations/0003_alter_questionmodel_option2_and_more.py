# Generated by Django 4.0.5 on 2022-06-26 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('question', '0002_alter_questionmodel_option1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionmodel',
            name='option2',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option3',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option4',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option5',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='option6',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
