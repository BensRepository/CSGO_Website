# Generated by Django 4.2.16 on 2024-10-16 17:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0022_rsleaderboardentry_date_modified'),
    ]

    operations = [
        migrations.DeleteModel(
            name='RSLeaderboardEntry',
        ),
        migrations.DeleteModel(
            name='Weeklys',
        ),
    ]