# Generated by Django 4.2 on 2023-06-26 18:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0007_rename_rates_rate'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rate',
            old_name='rate',
            new_name='value',
        ),
    ]