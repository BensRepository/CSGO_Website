# Generated by Django 4.2 on 2023-06-27 17:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0008_rename_rate_rate_value'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Rate',
        ),
    ]