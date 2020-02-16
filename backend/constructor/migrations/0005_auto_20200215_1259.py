# Generated by Django 3.0.1 on 2020-02-15 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0004_auto_20200215_1257'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='filling',
            name='avalible_biscuits',
        ),
        migrations.RemoveField(
            model_name='filling',
            name='avalible_creams',
        ),
        migrations.AddField(
            model_name='filling',
            name='avalible_biscuits_in_biscuit',
            field=models.ManyToManyField(blank=True, related_name='avalibleFillings', to='constructor.Biscuit', verbose_name='Доступные бисквиты в бисквитном торте'),
        ),
        migrations.AddField(
            model_name='filling',
            name='avalible_creams_in_biscuit',
            field=models.ManyToManyField(blank=True, related_name='avalibleFillings', to='constructor.Cream', verbose_name='Доступные кремыв бисквитном торте'),
        ),
    ]