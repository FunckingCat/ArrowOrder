# Generated by Django 3.0.1 on 2020-01-21 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wiki', '0006_remove_wikicategores_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wikiobject',
            name='text',
            field=models.TextField(default='Hashtag должен сооствтсвовать хэштэгу из Wiki Subcategores и CakeConstructor объектов, что бы все работало правильно'),
        ),
    ]