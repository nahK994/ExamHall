# Generated by Django 4.0.5 on 2022-06-20 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('userId', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=20, unique=True)),
                ('password', models.CharField(max_length=40)),
            ],
        ),
    ]
