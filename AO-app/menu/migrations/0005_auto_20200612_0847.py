# Generated by Django 3.0.7 on 2020-06-12 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_auto_20200607_0955'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainpagecontent',
            name='href',
            field=models.CharField(blank=True, max_length=100, verbose_name='Ссылка на страницу без адреса приложения и протокола или внешняя ссылка (http://...)'),
        ),
    ]
