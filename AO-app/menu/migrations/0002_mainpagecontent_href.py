# Generated by Django 3.0.7 on 2020-06-07 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mainpagecontent',
            name='href',
            field=models.CharField(default='/', max_length=100, verbose_name='Ссылка'),
            preserve_default=False,
        ),
    ]
