from django.db import models

class Case(models.Model):
    name = models.CharField(max_length=40)
    price = models.FloatField()
    hashid  = models.CharField(max_length=50)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class Rate(models.Model):
    name = models.CharField(max_length=40)
    value = models.FloatField()

    def __str__(self):
        return self.name
    
class LeaderboardCompetitiveEasyMode(models.Model):
    playerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=12)
    streak = models.IntegerField()
    rank = models.CharField(max_length=12)
    score = models.FloatField()

    def __str__(self):
        return self.name
