# Generated by Django 4.2.16 on 2024-09-18 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0014_alter_leaderboardcompetitiveeasymode_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaderboardcompetitiveeasymode',
            name='name',
            field=models.CharField(max_length=20),
        ),
    ]
