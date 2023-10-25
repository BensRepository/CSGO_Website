
function play_button(){
  try {
    window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/")
  } catch (error) {
    window.location.replace("http://cstools.co.uk/SkinMaster/Play/")
  }
    }

    function leaderboard_button(){
      try {
        window.location.replace("http://127.0.0.1:8000/SkinMaster/Leaderboard/");
      } catch (error) {
        window.location.replace("http://cstools.co.uk/SkinMaster/Leaderboard/");
      }

    }
    function about_button(){
      try {
        window.location.replace("http://127.0.0.1:8000/SkinMaster/About/");
      } catch (error) {
        window.location.replace("http://cstools.co.uk/SkinMaster/About/");
      }
    
    }
    function report_bug_screen_button(){
      try {
        window.location.replace("http://127.0.0.1:8000/SkinMaster/ReportBug/");
      } catch (error) {
        window.location.replace("http://cstools.co.uk/SkinMaster/ReportBug/");
      }
  
    }
  
    function practise_button(){
      try {
        window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/Practise/");
      } catch (error) {
        window.location.replace("http://cstools.co.uk/SkinMaster/Play/Practise/");
      }

    }
    function ranked_button(){
      try {
        window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/Ranked/");
      } catch (error) {
        window.location.replace("http://cstools.co.uk/SkinMaster/Play/Ranked/");
      }

    }
    function survival_button(){
      try {
        window.location.replace("http://127.0.0.1:8000/SkinMaster/Play/Survival/");
      } catch (error) {
        window.location.replace("http://cstools.co.uk/SkinMaster/Play/Survival/");
      }
    
    }
   
    function makeImages(gun,colour,type,skin){
    
      var img = document.createElement("IMG");
      url = "/static/skins/"+type+"/"+gun+"/"+colour+"/"+ skin+".png"
      img.src = url;
      img.id = skin
      img.style.width = "100%";
      img.style.height = "auto"; 
      var p = document.createElement("p");
      p.innerHTML = skin
      p.style.color ="white"
      p.style.width = "100%"
      p.style.height = "auto"
      var d = document.createElement("div");
      d.style.width = "200px"
      d.style.height = "auto"
      d.id = skin + "d"
  
      d.style.float = "left"
  
      document.getElementById('practiseSkins').appendChild(d);
  
      document.getElementById(skin + "d").appendChild(img);
      document.getElementById(skin + "d").appendChild(p);
      
    }
    var column1 = ""
    var column2 = ""
    var column3 = ""
    var column4 = ""
    var column5 = ""
    var column6 = ""
    var column7 = ""
    var column8 = ""
    var column9 = ""
    var column10 = ""
    var streak = 0
    var resultColour = "goldenrod";
    var last_column = "column1"
    var estimated_rank = "Wood"
    var skin_count = "" 
    var include_shotguns = true
    var include_smgs = true
    var include_rifles = true
    var include_pistols = true
    var include_machineguns = true
  
    var include_coverts = true
    var include_classifieds = true
    var include_restricted = true
    var include_mil_spec = true
    var include_industrial_grade = true
    var include_consumer_grade = true
  
  
    function makeImagesBoxes(gun,colour,type,skin){
  
      var img = document.createElement("IMG");
      url = "/static/skins/"+type+"/"+gun+"/"+colour+"/"+ skin+".png"
      img.src = url;
      img.id = "?"
      img.style.width = "100%";
      img.style.height = "auto"; 
      var p = document.createElement("p");
      p.innerHTML = "?"
      p.id = skin+"_text"
      p.style.color ="white"
      p.style.backgroundColor ="black"
      p.style.width = "100%"
      p.style.height = "auto"
      var d = document.createElement("div");
      d.style.width = "200px"
      d.style.height = "auto"
      d.id = skin 
      d.style.float = "left"
      //last_column = nextAvailableSplot(gun,colour,type,skin)
      
      document.getElementById(nextAvailableSplot(gun,colour,type,skin)).appendChild(d);
      currentPractiseskin = skin
      currentPractiseColour = colour
      // var previousColumn = {"column2":"column1","column3":"column2","column4":"column2","column5":"column4",
      // "column6":"column5","column7":"column6","column8":"column7","column9":"column8","column10":"column9"}
      // if (nextAvailableSplot(gun,colour,type,skin) == "column1") {
        
      // } else {
      //   document.getElementById(previousColumn[nextAvailableSplot(gun,colour,type,skin).style.backgroundColor = changeColours(colour)])
      // }
      document.getElementById(d.id).appendChild(img);
      document.getElementById(d.id).appendChild(p);
  
    }
  
    function nextAvailableSplot(gun,colour,type,skin){
      available_slot = "" 
  
      if(column1 == ""){
        column1= [gun,colour,type,skin]
        available_slot = "column1" 
        last_column = "column1"
        document.getElementById("column1").style.backgroundColor = "goldenrod";
      }
      else  if(column2 == ""){
        column2= [gun,colour,type,skin]
        available_slot = "column2" 
        document.getElementById("column1").style.backgroundColor = changeColours(column1[1])
        last_column = "column2"
        document.getElementById("column2").style.backgroundColor = "goldenrod";
      }
  
      else  if(column3 == ""){
        column3= [gun,colour,type,skin]
        available_slot = "column3"  
        document.getElementById("column2").style.backgroundColor = changeColours(column2[1])
        last_column = "column3"
        document.getElementById("column3").style.backgroundColor = "goldenrod";
      }
  
      else  if(column4 == ""){
        column4= [gun,colour,type,skin]
        available_slot = "column4" 
        document.getElementById("column3").style.backgroundColor = changeColours(column3[1])
        last_column = "column4"
        document.getElementById("column4").style.backgroundColor = "goldenrod";
      }
  
      else  if(column5 == ""){
        column5= [gun,colour,type,skin]
        available_slot = "column5" 
        document.getElementById("column4").style.backgroundColor = changeColours(column4[1])
        last_column = "column5"
        document.getElementById("column5").style.backgroundColor = "goldenrod";
      }  
  
      else  if(column6 == ""){
        column6= [gun,colour,type,skin]
        available_slot = "column6" 
        document.getElementById("column5").style.backgroundColor = changeColours(column5[1])
        last_column = "column6"
        document.getElementById("column6").style.backgroundColor = "goldenrod";
      }
  
      else  if(column7 == ""){
        column7= [gun,colour,type,skin]
        available_slot = "column7" 
        document.getElementById("column6").style.backgroundColor = changeColours(column6[1])
        last_column = "column7"
        document.getElementById("column7").style.backgroundColor = "goldenrod";
      }
  
      else  if(column8 == ""){
        column8= [gun,colour,type,skin]
        available_slot = "column8" 
        document.getElementById("column7").style.backgroundColor = changeColours(column7[1])
        last_column = "column8"
        document.getElementById("column8").style.backgroundColor = "goldenrod";
      }
  
      else  if(column9 == ""){
        column9= [gun,colour,type,skin]
        available_slot = "column9" 
        document.getElementById("column8").style.backgroundColor = changeColours(column8[1])
        last_column = "column9"
        document.getElementById("column9").style.backgroundColor = "goldenrod";
      }
  
      else  if(column10 == ""){
        column10= [gun,colour,type,skin]
        available_slot = "column10" 
        document.getElementById("column9").style.backgroundColor = changeColours(column9[1])
        last_column = "column10"
        document.getElementById("column10").style.backgroundColor = "goldenrod";
     
      }
  
      else {
  
        switchPositions(gun,colour,type,skin);
      }
    
      return(available_slot)
  
    }
  
      function changeColours(temp){
        if(temp == "light_blue"){
          temp ="#1a606e"
        }
        else if(temp == "purple"){
          temp = '#241a3b'
        }
        else if(temp == "pink"){
          temp = '#5c1153'
        }
        else if(temp == "blue"){
          temp = '#0b1666'
        }
        else if(temp == "red"){
          temp = '#421317'
        }
        return temp
      }
      function switchPositions(gun,colour,type,skin){
        temp = column2
        document.getElementById(column1[3]).remove();
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column2").style.borderColor
  
        document.getElementById(column2[3]).remove();
        column1 =""
        column2 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById("column1").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column1").style.borderColor = b_colour
  
        temp = column3
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column3").style.borderColor
        document.getElementById(column3[3]).remove();
        column3 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column2").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column2").style.borderColor= b_colour
  
        temp = column4
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column4").style.borderColor
        document.getElementById(column4[3]).remove();
        column4 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column3").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column3").style.borderColor= b_colour
  
        temp = column5
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column5").style.borderColor
        document.getElementById(column5[3]).remove();
        column5 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column4").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column4").style.borderColor = b_colour
  
        temp = column6
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column6").style.borderColor
        document.getElementById(column6[3]).remove();
        column6 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column5").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column5").style.borderColor = b_colour
  
        temp = column7
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column7").style.borderColor
        document.getElementById(column7[3]).remove();
        column7 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column6").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column6").style.borderColor = b_colour
  
        temp = column8
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column8").style.borderColor
        document.getElementById(column8[3]).remove();
        column8 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column7").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column7").style.borderColor = b_colour
  
        temp = column9
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        b_colour = document.getElementById("column9").style.borderColor
        document.getElementById(column9[3]).remove();
        column9 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column8").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column8").style.borderColor = b_colour
  
  
        temp = column10
        bg_colour = document.getElementById(temp[3]+"_text").style.backgroundColor
        //b_colour = document.getElementById("column10").style.borderColor
        document.getElementById(column10[3]).remove();
        column10 =""
        makeImagesBoxes(temp[0],temp[1],temp[2],temp[3])
        document.getElementById("column9").style.backgroundColor = changeColours(temp[1])
        document.getElementById(temp[3]+"_text").textContent = temp[3]
        document.getElementById(temp[3]+"_text").style.backgroundColor = bg_colour
        document.getElementById("column9").style.borderColor = resultColour
  
  
        try{
          document.getElementById(column10[3]).remove();
        }
        catch{
  
          makeImagesBoxes(gun,colour,type,skin)
          document.getElementById("column9").getElementById(skin).remove();
          document.getElementById("column10").style.backgroundColor = changeColours(colour)
        }
       
      
  
  
      }
  
      
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
  
      var currentPractiseskin = ""
      var currentPractiseColour = ""
      

      function survivalGame(){   
        document.getElementById("leaderboard_prompt").innerText = ""
        skin_count = skins.length
        document.getElementById("practise_game").style.display = "none"
        randomType = ""
        randomGun =""
        randomColour=""
        randomSkin = "" 
        
        document.getElementById("difficulty_value").innerText= determineDifficulty()
    
        
        if( skin_count < 40){
            alert("Please include more skins in your customisation")
        }
        else{
          all_guns_urls = skins
      
        
          randomSkinUrl = all_guns_urls[getRandomInt(all_guns_urls.length)]
          //alert(randomSkinUrl)
          randomSkinUrlTest = randomSkinUrl.split("\\")[1].substring(0,randomSkinUrl.split("\\")[1].length-4)
          randomSkinUrlWeaponTest = randomSkinUrl.split("\\")[0].split("/")[4]
        
          //alert(getSelectedSkinsUrls()[3].split("\\"))
          while((randomSkinUrlTest == column1[3])  || (randomSkinUrlTest == column2[3]) || (randomSkinUrlTest == column3[3]) || (randomSkinUrlTest == column4[3]) 
             || (randomSkinUrlTest == column5[3])  || (randomSkinUrlTest == column6[3])  || (randomSkinUrlTest == column7[3]&& randomSkinUrlWeaponTest == column7[0])  
            || (randomSkinUrlTest == column8[3])  || (randomSkinUrlTest == column9[3])  || (randomSkinUrlTest == column10[3])) {
            randomSkinUrl = all_guns_urls[getRandomInt(all_guns_urls.length)]
            randomSkinUrlWeaponTest = randomSkinUrl.split("\\")[0].split("/")[4]
            randomSkinUrlTest = randomSkinUrl.split("\\")[1].substring(0,randomSkinUrl.split("\\")[1].length-4)
  
          }
    
    
          randomSkin = randomSkinUrl.split("\\")[1].substring(0,randomSkinUrl.split("\\")[1].length-4);
          randomColour = randomSkinUrl.split("\\")[0].split("/")[5];
          randomGun = randomSkinUrl.split("\\")[0].split("/")[4];
          randomType = randomSkinUrl.split("\\")[0].split("/")[3];
          makeImagesBoxes(randomGun,randomColour,randomType,randomSkin)
              
         
        }
       
    }
    
    
    
      function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          /*a function to classify an item as "active":*/
          if (!x) return false;
          /*start by removing the "active" class on all items:*/
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          /*add class "autocomplete-active":*/
          x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
          /*a function to remove the "active" class from all autocomplete items:*/
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
          }
        }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          var x = document.getElementsByClassName("autocomplete-items");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
      }
      autocomplete(document.getElementById("myInput"), countries);
  var pickedColour = "None"
  var best_streak = 0
function testInputs(){
  if(document.getElementById("myInput").value == ""){
    
    document.getElementById("missing_field_prompt").innerText = "Enter skin name"
  }
  else{
    document.getElementById("missing_field_prompt").innerText = ""
    test2()
  }
}
  function test2(){
     roundsPLayed +=1
    // Name Answer
    var nameValue = document.getElementById("myInput").value;

    if(nameValue === currentPractiseskin){
      estimated_rank = "Wood"
      document.getElementById(currentPractiseskin+"_text").textContent = currentPractiseskin
      document.getElementById(currentPractiseskin+"_text").style.backgroundColor = "green"
      resultColour = "green"
 
  
      
    }
    else{
      resultColour = "red"
      document.getElementById(currentPractiseskin+"_text").textContent = currentPractiseskin
      document.getElementById(currentPractiseskin+"_text").style.backgroundColor = "red"
      pickedColour = colourChoice() 
      document.getElementById("game").style.display = "none"
      document.getElementById("game_over_screen").style.display = "inline"
      document.getElementById("score").innerText = streak
      
      document.getElementById("answerSkin").innerText = currentPractiseskin
      document.getElementById("selectedSkin").innerText = nameValue


      rarity_remap = {"grey":"Consumer Grade","light_blue":"Industrial grade","blue":"Mil-Spec","purple":"Restricted","pink":"Classified","red":"Covert"}
      document.getElementById("selectedColour").innerText = rarity_remap[pickedColour]
      document.getElementById("answerColour").innerText = rarity_remap[currentPractiseColour]

      colours_remap = {"grey":"grey","light_blue":"#1a606e","blue":"blue","purple":"purple","pink":"#eb35d5","red":"red"}
      document.getElementById("answerColour").style.color = colours_remap[currentPractiseColour]
      document.getElementById("selectedColour").style.color = colours_remap[pickedColour]
      
    }
  
    // Rarity Answer
    if (colourChoice() == currentPractiseColour) {
  
      resultColour = "green"
      if(last_column == "column10"){
      
      }
      else{
        document.getElementById(last_column).style.borderColor = resultColour
      }
      
    } else {
      resultColour = "red"
      pickedColour = colourChoice() 
      document.getElementById("game").style.display = "none"
      document.getElementById("game_over_screen").style.display = "inline"
      
    
      document.getElementById("score").innerText = streak
     
      document.getElementById("answerSkin").innerText = currentPractiseskin
      document.getElementById("selectedSkin").innerText = nameValue
      localStorage.setItem("streak", streak);
      rarity_remap = {"grey":"Consumer Grade","light_blue":"Industrial grade","blue":"Mil-Spec","purple":"Restricted","pink":"Classified","red":"Covert"}
      document.getElementById("selectedColour").innerText = rarity_remap[pickedColour]
      document.getElementById("answerColour").innerText = rarity_remap[currentPractiseColour]

      colours_remap = {"grey":"grey","light_blue":"#1a606e","blue":"blue","purple":"purple","pink":"#eb35d5","red":"red"}
      document.getElementById("answerColour").style.color = colours_remap[currentPractiseColour]
      document.getElementById("selectedColour").style.color = colours_remap[pickedColour]
      
      if(last_column == "column10"){
      
      }
      else{
        document.getElementById(last_column).style.borderColor = resultColour
      }
    }
   if((nameValue === currentPractiseskin)&&(colourChoice() == currentPractiseColour)){
    streak +=1
   }
   else{
    
   }
  
  
  
   // Update Stats
  

    document.getElementById("streak").innerText = streak
  
    try{
      document.getElementById("difficulty_value").innerText= determineDifficulty()
    }
    catch{
      document.getElementById("difficulty_value").innerText= "Start Game First"
    }
    
    survivalGame()
  }
  
  function determineDifficulty(){
    
    difficulty = "test"
  
    if (skin_count > 1000) {
      difficulty = "Ohnepixel"
    }
    else  if (skin_count > 850 ) {
      difficulty = "Expert"
    }
    else  if (skin_count >  650 ) {
      difficulty = "Hard"
    }
    else if (skin_count >  500) {
      difficulty = "Medium"
    }
    else if (skin_count >  400) {
      difficulty = "Easy"
    }
    else{
      difficulty = "Select more options for a difficulty rating"
    }
    return difficulty
  }
  var roundsPLayed = 0
  
  function determineRank(){
   
    rate =   ((colours_correct*0.55+skin_name_correct*1.45)/(skin_name_wrong*1.45+colours_wrong*0.55+colours_correct*0.55+skin_name_correct*1.45))*100
  
    if (roundsPLayed > 30) {
  
      if (rate > 65) {
        rank = "Global Elite"
      } else  if (rate > 55) {
        rank = "Supreme"
      }
      else  if (rate > 50) {
        rank = "LEM"
      }
      else  if (rate > 45) {
        rank = "LE"
      }
      else  if (rate > 40) {
        rank = "DMG"
      }
      else  if (rate > 35) {
        rank = "MGE"
      }
      else  if (rate > 30) {
        rank = "MG2"
      }
      else  if (rate > 25) {
        rank = "MG"
      }
      else  if (rate > 20) {
        rank = "NOVA"
      }
      else  if (rate > 15) {
        rank = "Silver"
      }
      else if(rate < 10){
        rank = "Shit"
      }
    } else{
      rank = "Unranked - Play more! " + String(30 - roundsPLayed) + " more"
    }
    return rank
  }