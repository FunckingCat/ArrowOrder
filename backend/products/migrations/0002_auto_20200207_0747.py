# Generated by Django 3.0.1 on 2020-02-07 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.CharField(default='/static/stock/', max_length=80),
        ),
        migrations.AlterField(
            model_name='products_sub',
            name='href',
            field=models.CharField(default='/', max_length=80),
        ),
        migrations.AlterField(
            model_name='products_sub',
            name='image',
            field=models.CharField(default='/static/stock/', max_length=80),
        ),
    ]