# Generated by Django 3.0.7 on 2020-06-12 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20200317_1548'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='priority',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='Приоритет(чем меньше тем ближе к верху)'),
        ),
        migrations.AddField(
            model_name='products_sub',
            name='priority',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='Приоритет(чем меньше тем ближе к верху)'),
        ),
    ]
