# Generated by Django 4.0.5 on 2022-06-29 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exam', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exammodel',
            name='examId',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
