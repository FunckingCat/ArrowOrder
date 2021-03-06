# Generated by Django 3.0.1 on 2020-03-15 06:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bug',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('state', models.TextField()),
                ('reason', models.CharField(max_length=150)),
                ('descr', models.TextField()),
            ],
            options={
                'verbose_name': 'Баг',
                'verbose_name_plural': 'Баги',
            },
        ),
        migrations.CreateModel(
            name='Error',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=100)),
                ('contact', models.CharField(max_length=100)),
                ('descr', models.TextField()),
            ],
            options={
                'verbose_name': 'Ошибка',
                'verbose_name_plural': 'Ошибки',
            },
        ),
        migrations.CreateModel(
            name='New_user',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=100)),
                ('contact', models.CharField(max_length=100)),
                ('navigator', models.CharField(max_length=100)),
                ('clientWidth', models.IntegerField()),
                ('clientHeight', models.IntegerField()),
            ],
            options={
                'verbose_name': 'Новый пользователь',
                'verbose_name_plural': 'Новые пользователи',
            },
        ),
    ]
