# Generated by Django 4.1.1 on 2023-05-11 14:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lecture', '0002_lecturemodel_description'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='classmodel',
            table='classes',
        ),
        migrations.AlterModelTable(
            name='lecturemodel',
            table='lectures',
        ),
    ]