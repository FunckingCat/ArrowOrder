# Generated by Django 3.0.1 on 2020-02-15 12:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('href', models.CharField(default='/Products/', max_length=80)),
                ('image', models.CharField(default='/static/stock/', max_length=80)),
                ('slogan', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Products_sub',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('href', models.CharField(default='/', max_length=80)),
                ('image', models.CharField(default='/static/stock/', max_length=80)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product')),
            ],
        ),
    ]
