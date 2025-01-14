from django.shortcuts import render, redirect
from django.http import HttpResponse
import requests
import json
import random
import sys, os
from .models import Case
from .models import Rate
from .models import LeaderboardCompetitiveEasyMode
from .models import LeaderboardCompetitiveMediumMode
from .models import LeaderboardCompetitiveHardMode
from .models import LeaderboardCompetitiveExpertMode
from .models import LeaderboardCompetitiveOhnepixelMode
from .models import LeaderboardSurvivalEasyMode
from .models import LeaderboardSurvivalMediumMode
from .models import LeaderboardSurvivalHardMode
from .models import LeaderboardSurvivalExpertMode
from .models import LeaderboardSurvivalOhnepixelMode

from .forms import PostFormEasy
from .forms import PostFormMedium
from .forms import PostFormHard
from .forms import PostFormExpert
from .forms import PostFormOhnepixel

from .forms import PostFormEasySurvival
from .forms import PostFormMediumSurvival
from .forms import PostFormHardSurvival
from .forms import PostFormExpertSurvival
from .forms import PostFormOhnepixelSurvival

from rest_framework import viewsets
import glob
from WebApp.settings import STATIC_URL
# Create your views here.



class WebAppViewset(viewsets.ModelViewSet):
    def load_index(request):

        filenames = {}
        try:
            cases = glob.glob("."+STATIC_URL+"case_opener/*")
            filenames['url'] = []
            for i in cases:
                case = i[21:len(i)]
                filenames[case] = {}
                types = glob.glob("."+STATIC_URL+"case_opener/"+case +"/*")
             
                for type in types:
                    rarity =   type[len("."+STATIC_URL+"case_opener/*" +case):len(type)]
                    filenames[case][rarity] = []
                    skins = glob.glob("."+STATIC_URL+"case_opener/"+case +"/"+rarity+"/*")
                
                    for skin in skins:
                        caseskin = skin[len("."+STATIC_URL+"case_opener/"+case +"/"+rarity+"/"):len(skin)]
                        filenames[case][rarity].append(caseskin)
            
            cases = glob.glob("."+STATIC_URL+"case_opener/*")

            filenames['cases'] = []

            for i in cases:
                
                filenames['cases'].append(i[21:len(i)])
               
            
        except:
            print("failed")
        
        return render(request,'index.html',context=filenames)
    
    def load_roulette(request):
        return render(request,'roulette.html')

    def load_bind(request):
    
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request,'bind.html',context=context)
    
    def load_sticker(request):

        tornamantNames = ["ESLKatowice14","IntelRio22","PGLAntwerp22","PGLStockholm21","StarLadderBerlin19",
                        "FACEITLondon18","ELEAGUEBoston18","ELEAGUEAtlanta17","ESLCologne16",
                          "MLGColumbus16","ClujNapoca2015","ESLKatowice15","DreamHack14","ESLCologne14",
                          "ESLKatowice14","DreamHack13","RMR20","ESLKatowice19","PGLKrakow17","ESLCologne15","Misc","Paris23","Copenhagen24"]

        filenames = {}

    
        for i in tornamantNames:
            filespaper = glob.glob("."+STATIC_URL+"stickers/Paper/"+i+"/*")  
            filesholo = glob.glob("."+STATIC_URL+"stickers/Holo/"+i+"/*")
            filesfoil = glob.glob("."+STATIC_URL+"stickers/Foil/"+i+"/*")
            filesgold = glob.glob("."+STATIC_URL+"stickers/Gold/"+i+"/*")
            filenames[i] = {"filespaper":[],"filesholo":[],"filesfoil":[],"filesgold":[]}
            for j in  filespaper:
                filenames[i]["filespaper"].append(j[24:len(j)-4])
            for j in  filesholo:
                filenames[i]["filesholo"].append(j[23:len(j)-4])
            for j in  filesfoil:
                filenames[i]["filesfoil"].append(j[23:len(j)-4])
            for j in  filesgold:
                filenames[i]["filesgold"].append(j[23:len(j)-4])
            
        return render(request,'sticker.html',context=filenames)

    def load_calculator(request):

        caseMedianPrices = {}
        Hashid = {}
        caseNames =[]
        for case in Case.objects.all().values().order_by('price'):
            caseMedianPrices[case['name']] = case['price']
            Hashid[case['name']] = case['hashid']
            caseNames.append(case['name']) 
        context = {"caseMedianPrices":caseMedianPrices,'Hashid' : Hashid,'caseNames':caseNames}

        return render(request, "calculator.html",context=context)
    
    def _get_prices(self):
        needs_updating = Case.objects.all().order_by('date_modified').first()
        url = "https://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name="+needs_updating.hashid+"&currency=2"
        api_request = requests.get(url)
        try:
            api_request.raise_for_status()
            return api_request.json()
        except:
            print("no data returned")
            return None
        
    def _get_conversion_rates(self):
        url = "https://openexchangerates.org/api/latest.json?app_id=97690a0737ec4f75a6e93c705a61e81d%27"
        api_request = requests.get(url)
        try:
            api_request.raise_for_status()
            return api_request.json()
        except:
            print("no data returned")
            return None
        
    def _save_conversion_rates(self):
        update_rate = Rate.objects.all()
        required_rates = ['GBP','USD','EUR']
        rate_data = self._get_conversion_rates()
       
        if rate_data is not None:
            try:
                for i in required_rates:
                    print(float(rate_data['rates'][i]))
                    rate_object = Rate.objects.get(name=i)
                    rate_object.value = float(rate_data['rates'][i])
                    rate_object.save(update_fields=['value'])
                    print("saves model")
            except:
                print("Didn't save model")
                pass
    
    def save_price_data(self):
        needs_updating = Case.objects.all().order_by('date_modified').first()
        case_data = self._get_prices()
        print(case_data)
        if case_data is not None:
            try:
                case_object = Case.objects.get(name=needs_updating.name)
                case_object.price = float(case_data['median_price'][1:])
                case_object.save(update_fields=['price','date_modified'])
            except:
                print("Didn't save model")
                pass


    def skin_master(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master.html",context=context)
    
    def skin_master_practise(request):

        types = ["machineguns","shotguns","smgs","pistols","rifles"]
        weapons = {"machineguns":[],"shotguns":[],"smgs":[],"pistols":[],"rifles":[]}
        filenames = {}
        filenames['types'] = types

        for t in types:
            weapons[t] = glob.glob("."+STATIC_URL+"skins/"+t+"/*")
            filenames[t] = []
            for j in weapons[t]:
                mac10 = j[len("."+STATIC_URL+"skins/"+t+"/"):len(j)]
                filenames[t].append(mac10)
        for t in types:
            for w in weapons[t]:
                grey = glob.glob(w+"/grey/*") 
                light_blue = glob.glob(w+"/light_blue/*")
                blue = glob.glob(w+"/blue/*")
                purple = glob.glob(w+"/purple/*")
                pink = glob.glob(w+"/pink/*")
                red =  glob.glob(w+"/red/*")
                weapon_name = w[len("."+STATIC_URL+"skins/"+t+"/"):len(w)]
                filenames[weapon_name] = {"grey":[],"light_blue":[],"blue":[],"purple":[],"pink":[],"red":[]}
        
                for j in grey:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/grey/"):len(j)]
                    filenames[weapon_name]["grey"].append(skinname[0:len(skinname)-4])
                for j in  light_blue:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/light_blue/"):len(j)]
                    filenames[weapon_name]["light_blue"].append(skinname[0:len(skinname)-4])
                for j in  blue:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/blue/"):len(j)]
                    filenames[weapon_name]["blue"].append(skinname[0:len(skinname)-4])
                for j in  purple:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/purple/"):len(j)]
                    filenames[weapon_name]["purple"].append(skinname[0:len(skinname)-4])
                for j in  pink:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/pink/"):len(j)]
                    filenames[weapon_name]["pink"].append(skinname[0:len(skinname)-4])
                for j in  red:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/red/"):len(j)]
                    filenames[weapon_name]["red"].append(skinname[0:len(skinname)-4])
                    

        return render(request, "skin_master_practise.html",context=filenames)    
    
    def skin_master_survival(request):
        types = ["machineguns","shotguns","smgs","pistols","rifles"]
        weapons = {"machineguns":[],"shotguns":[],"smgs":[],"pistols":[],"rifles":[]}
        filenames = {}
        filenames['types'] = types

        for t in types:
            weapons[t] = glob.glob("."+STATIC_URL+"skins/"+t+"/*")
            filenames[t] = []
            for j in weapons[t]:
                mac10 = j[len("."+STATIC_URL+"skins/"+t+"/"):len(j)]
                filenames[t].append(mac10)
        for t in types:
            for w in weapons[t]:
                grey = glob.glob(w+"/grey/*") 
                light_blue = glob.glob(w+"/light_blue/*")
                blue = glob.glob(w+"/blue/*")
                purple = glob.glob(w+"/purple/*")
                pink = glob.glob(w+"/pink/*")
                red =  glob.glob(w+"/red/*")
                weapon_name = w[len("."+STATIC_URL+"skins/"+t+"/"):len(w)]
                filenames[weapon_name] = {"grey":[],"light_blue":[],"blue":[],"purple":[],"pink":[],"red":[]}
        
                for j in grey:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/grey/"):len(j)]
                    filenames[weapon_name]["grey"].append(skinname[0:len(skinname)-4])
                for j in  light_blue:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/light_blue/"):len(j)]
                    filenames[weapon_name]["light_blue"].append(skinname[0:len(skinname)-4])
                for j in  blue:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/blue/"):len(j)]
                    filenames[weapon_name]["blue"].append(skinname[0:len(skinname)-4])
                for j in  purple:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/purple/"):len(j)]
                    filenames[weapon_name]["purple"].append(skinname[0:len(skinname)-4])
                for j in  pink:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/pink/"):len(j)]
                    filenames[weapon_name]["pink"].append(skinname[0:len(skinname)-4])
                for j in  red:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/red/"):len(j)]
                    filenames[weapon_name]["red"].append(skinname[0:len(skinname)-4])
                    
            
      
        return render(request, "skin_master_survival.html",context=filenames)    
    
    def skin_master_ranked(request):
        types = ["machineguns","shotguns","smgs","pistols","rifles"]
        weapons = {"machineguns":[],"shotguns":[],"smgs":[],"pistols":[],"rifles":[]}
        filenames = {}
        filenames['types'] = types

        for t in types:
            weapons[t] = glob.glob("."+STATIC_URL+"skins/"+t+"/*")
            filenames[t] = []
            for j in weapons[t]:
                mac10 = j[len("."+STATIC_URL+"skins/"+t+"/"):len(j)]
                filenames[t].append(mac10)
        for t in types:
            for w in weapons[t]:
                grey = glob.glob(w+"/grey/*") 
                light_blue = glob.glob(w+"/light_blue/*")
                blue = glob.glob(w+"/blue/*")
                purple = glob.glob(w+"/purple/*")
                pink = glob.glob(w+"/pink/*")
                red =  glob.glob(w+"/red/*")
                weapon_name = w[len("."+STATIC_URL+"skins/"+t+"/"):len(w)]
                filenames[weapon_name] = {"grey":[],"light_blue":[],"blue":[],"purple":[],"pink":[],"red":[]}
        
                for j in grey:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/grey/"):len(j)]
                    filenames[weapon_name]["grey"].append(skinname[0:len(skinname)-4])
                for j in  light_blue:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/light_blue/"):len(j)]
                    filenames[weapon_name]["light_blue"].append(skinname[0:len(skinname)-4])
                for j in  blue:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/blue/"):len(j)]
                    filenames[weapon_name]["blue"].append(skinname[0:len(skinname)-4])
                for j in  purple:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/purple/"):len(j)]
                    filenames[weapon_name]["purple"].append(skinname[0:len(skinname)-4])
                for j in  pink:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/pink/"):len(j)]
                    filenames[weapon_name]["pink"].append(skinname[0:len(skinname)-4])
                for j in  red:
                    skinname = j[len("."+STATIC_URL+"skins/"+t+"/"+weapon_name +"/red/"):len(j)]
                    filenames[weapon_name]["red"].append(skinname[0:len(skinname)-4])
                    


        return render(request, "skin_master_ranked.html",context=filenames)    
    
    def skin_master_play(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_play.html",context=context)    
    
    def skin_master_leaderboard_competitive_easy(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveEasyMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_easy.html",context=context)    
    
    def skin_master_leaderboard_competitive_medium(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveMediumMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_medium.html",context=context)    
    
    def skin_master_leaderboard_competitive_hard(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveHardMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_hard.html",context=context)    
    

    def skin_master_leaderboard_competitive_expert(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveExpertMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_expert.html",context=context)    
    def skin_master_leaderboard_competitive_ohnepixel(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardCompetitiveOhnepixelMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_competitive_ohnepixel.html",context=context)    
    def skin_master_about(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_about.html",context=context)    

    def skin_master_report_bug(request):
        types = glob.glob("."+STATIC_URL+"loadout/*")
        filenames = {}
        context = {}
        for i in types:
            filenames[i[17:]] = glob.glob("."+STATIC_URL+"loadout/"+i[17:]+"/*")
        context['filenames']=filenames
        return render(request, "skin_master_report_bug.html",context=context)    
    

    def easy_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormEasy(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Easy/")
        else:
            form = PostFormEasy()
        return render(request,"easy_leaderboard_competitive.html", {"form": form})
    
    def medium_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormMedium(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Medium/")
        else:
            form = PostFormMedium()
        return render(request,"medium_leaderboard_competitive.html", {"form": form})
    
    def hard_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormHard(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Hard/")
        else:
            form = PostFormHard()
        return render(request,"hard_leaderboard_competitive.html", {"form": form})
    
    def expert_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormExpert(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Expert/")
        else:
            form = PostFormExpert()
        return render(request,"expert_leaderboard_competitive.html", {"form": form})
    

    def ohnepixel_leaderboard_competitive(request):
        if request.method == "POST":
            form = PostFormOhnepixel(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Competitive/Ohnepixel/")
        else:
            form = PostFormOhnepixel()
        return render(request,"ohnepixel_leaderboard_competitive.html", {"form": form})
    








    def skin_master_leaderboard_survival_easy(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalEasyMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_easy.html",context=context)    
    
    def skin_master_leaderboard_survival_medium(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalMediumMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_medium.html",context=context)    
    
    def skin_master_leaderboard_survival_hard(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalHardMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_hard.html",context=context)    
    

    def skin_master_leaderboard_survival_expert(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalExpertMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_expert.html",context=context)    
    def skin_master_leaderboard_survival_ohnepixel(request):
        context= {}
        leaderboard_data=[]
        for x in LeaderboardSurvivalOhnepixelMode.objects.all().values():
            leaderboard_data.append(x)
     
        context['leaderboard_data'] = leaderboard_data
      
        return render(request, "skin_master_leaderboard_survival_ohnepixel.html",context=context)    
    
    #FIX FROM HERE

    def easy_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormEasySurvival(request.POST)
     
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Easy/")
        else:
            form = PostFormEasy()
        return render(request,"easy_leaderboard_survival.html", {"form": form})
    
    def medium_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormMediumSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Medium/")
        else:
            form = PostFormMediumSurvival()
        return render(request,"medium_leaderboard_survival.html", {"form": form})
    
    def hard_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormHardSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Hard/")
        else:
            form = PostFormHardSurvival()
        return render(request,"hard_leaderboard_survival.html", {"form": form})
    
    def expert_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormExpertSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Expert/")
        else:
            form = PostFormExpertSurvival()
        return render(request,"expert_leaderboard_survival.html", {"form": form})
    

    def ohnepixel_leaderboard_survival(request):
        if request.method == "POST":
            form = PostFormOhnepixelSurvival(request.POST)
            form.save()
            return redirect("/SkinMaster/Leaderboard/Survival/Ohnepixel/")
        else:
            form = PostFormOhnepixel()
        return render(request,"ohnepixel_leaderboard_survival.html", {"form": form})
    