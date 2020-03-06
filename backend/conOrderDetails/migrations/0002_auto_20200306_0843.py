# Generated by Django 3.0.1 on 2020-03-06 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('conOrderDetails', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='decor',
            name='icon',
            field=models.CharField(default='/static/icons/decor/', max_length=60, verbose_name='Иконка'),
        ),
        migrations.AlterField(
            model_name='weight',
            name='dimension',
            field=models.CharField(max_length=5, verbose_name='Размерность'),
        ),
        migrations.AlterField(
            model_name='weight',
            name='step',
            field=models.FloatField(help_text='Шаг изменения значения', verbose_name='Step'),
        ),
    ]
