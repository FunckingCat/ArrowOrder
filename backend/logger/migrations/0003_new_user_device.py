# Generated by Django 3.0.1 on 2020-03-15 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('logger', '0002_auto_20200315_0647'),
    ]

    operations = [
        migrations.AddField(
            model_name='new_user',
            name='device',
            field=models.CharField(default=' ', max_length=50),
            preserve_default=False,
        ),
    ]
