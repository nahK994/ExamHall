# Generated by Django 4.0.5 on 2022-06-25 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionmodel',
            name='questionId',
            field=models.BigIntegerField(primary_key=True, serialize=False),
        ),
    ]