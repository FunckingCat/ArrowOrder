# Generated by Django 3.0.1 on 2020-03-12 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orderManager', '0003_auto_20200312_1748'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='details',
            field=models.CharField(max_length=400, verbose_name='Детали'),
        ),
    ]
