# Generated by Django 4.0.5 on 2022-06-20 05:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0002_alter_usermodel_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermodel',
            name='userId',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
