# Generated by Django 4.0.5 on 2022-06-20 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermodel',
            name='userId',
            field=models.CharField(auto_created=True, max_length=20, primary_key=True, serialize=False),
        ),
    ]
