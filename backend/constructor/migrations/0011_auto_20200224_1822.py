# Generated by Django 3.0.1 on 2020-02-24 18:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0010_auto_20200216_0902'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='biscuit',
            name='biscuit_icon',
        ),
        migrations.RemoveField(
            model_name='biscuit',
            name='cup_icon',
        ),
        migrations.RemoveField(
            model_name='biscuit',
            name='honey_icon',
        ),
        migrations.RemoveField(
            model_name='biscuit',
            name='pop_up_icon',
        ),
        migrations.RemoveField(
            model_name='cream',
            name='biscuit_icon',
        ),
        migrations.RemoveField(
            model_name='cream',
            name='cup_icon',
        ),
        migrations.RemoveField(
            model_name='cream',
            name='honey_cream_second_icon',
        ),
        migrations.RemoveField(
            model_name='cream',
            name='honey_icon',
        ),
        migrations.RemoveField(
            model_name='cream',
            name='pop_up_icon',
        ),
        migrations.RemoveField(
            model_name='filling',
            name='biscuit_icon',
        ),
        migrations.RemoveField(
            model_name='filling',
            name='cup_icon',
        ),
        migrations.RemoveField(
            model_name='filling',
            name='honey_icon',
        ),
        migrations.RemoveField(
            model_name='filling',
            name='pop_up_icon',
        ),
    ]
