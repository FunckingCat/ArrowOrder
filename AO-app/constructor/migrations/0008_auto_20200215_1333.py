# Generated by Django 3.0.1 on 2020-02-15 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('constructor', '0007_auto_20200215_1313'),
    ]

    operations = [
        migrations.AddField(
            model_name='cream',
            name='honey_cream_second_icon',
            field=models.CharField(default='/static/icons/constructor/CupCake/.svg', help_text='Иконка в конструкторе медовика с нижними слоями', max_length=120, verbose_name='Иконка в конструкторе'),
        ),
        migrations.AlterField(
            model_name='biscuit',
            name='used_in_biscuit',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе бисквитного торта'),
        ),
        migrations.AlterField(
            model_name='biscuit',
            name='used_in_cup',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе капкейка'),
        ),
        migrations.AlterField(
            model_name='biscuit',
            name='used_in_honey',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе открытого медовика'),
        ),
        migrations.AlterField(
            model_name='cream',
            name='used_in_biscuit',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе бисквитного торта'),
        ),
        migrations.AlterField(
            model_name='cream',
            name='used_in_cup',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе капкейка'),
        ),
        migrations.AlterField(
            model_name='cream',
            name='used_in_honey',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе открытого медовика'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='used_in_biscuit',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе бисквитного торта'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='used_in_cup',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе капкейка'),
        ),
        migrations.AlterField(
            model_name='filling',
            name='used_in_honey',
            field=models.BooleanField(default=False, verbose_name='Используется в конструкторе открытого медовика'),
        ),
    ]
