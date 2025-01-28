# Generated by Django 5.1.5 on 2025-01-28 16:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=3)),
                ('rate', models.DecimalField(decimal_places=6, max_digits=10, null=True)),
                ('date', models.DateField(default=datetime.date.today)),
            ],
        ),
    ]
