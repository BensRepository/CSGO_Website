class PlayerData {
    constructor(player_data) {
        var player_data_split = player_data.split('\\')
        var player_data_sorted = player_data_split.filter(function (index) {
            return index !== 'n-1,-1';
        });
        this.Overall =  {"rank":cleanSkillData(player_data_split[0])[0]
            .substring(1,cleanSkillData(player_data_split[0])[0].length),
                        'level':cleanSkillData(player_data_split[0])[1],
                        'xp':cleanSkillData(player_data_split[0])[2]}

        this.Attack =  {"rank":cleanSkillData(player_data_split[1])[0],
                        'level':cleanSkillData(player_data_split[1])[1],
                        'xp':cleanSkillData(player_data_split[1])[2]}  

        this.Defence =  {"rank":cleanSkillData(player_data_split[2])[0],
                        'level':cleanSkillData(player_data_split[2])[1],
                        'xp':cleanSkillData(player_data_split[2])[2]}

        this.Strength =  {"rank":cleanSkillData(player_data_split[3])[0],
                        'level':cleanSkillData(player_data_split[3])[1],
                        'xp':cleanSkillData(player_data_split[3])[2]}  

        this.Hitpoints =  {"rank":cleanSkillData(player_data_split[4])[0],
                        'level':cleanSkillData(player_data_split[4])[1],
                        'xp':cleanSkillData(player_data_split[4])[2]}

        this.Ranged =  {"rank":cleanSkillData(player_data_split[5])[0],
                        'level':cleanSkillData(player_data_split[5])[1],
                        'xp':cleanSkillData(player_data_split[5])[2]}  

        this.Prayer =  {"rank":cleanSkillData(player_data_split[6])[0],
                        'level':cleanSkillData(player_data_split[6])[1],
                        'xp':cleanSkillData(player_data_split[6])[2]}

        this.Magic =  {"rank":cleanSkillData(player_data_split[7])[0],
                        'level':cleanSkillData(player_data_split[7])[1],
                        'xp':cleanSkillData(player_data_split[7])[2]} 

        this.Cooking =  {"rank":cleanSkillData(player_data_split[8])[0],
                        'level':cleanSkillData(player_data_split[8])[1],
                        'xp':cleanSkillData(player_data_split[8])[2]}

        this.WoodCutting =  {"rank":cleanSkillData(player_data_split[9])[0],
                        'level':cleanSkillData(player_data_split[9])[1],
                         'xp':cleanSkillData(player_data_split[9])[2]}  

        this.Fletching =  {"rank":cleanSkillData(player_data_split[10])[0],
                        'level':cleanSkillData(player_data_split[10])[1],
                        'xp':cleanSkillData(player_data_split[10])[2]}

        this.Fishing =  {"rank":cleanSkillData(player_data_split[11])[0],
                        'level':cleanSkillData(player_data_split[11])[1],
                        'xp':cleanSkillData(player_data_split[11])[2]}   

        this.Firemaking =  {"rank":cleanSkillData(player_data_split[12])[0],
                        'level':cleanSkillData(player_data_split[12])[1],
                        'xp':cleanSkillData(player_data_split[12])[2]}   

        this.Crafting =  {"rank":cleanSkillData(player_data_split[13])[0],
                        'level':cleanSkillData(player_data_split[13])[1],
                        'xp':cleanSkillData(player_data_split[13])[2]}

        this.Smithing =  {"rank":cleanSkillData(player_data_split[14])[0],
                        'level':cleanSkillData(player_data_split[14])[1],
                        'xp':cleanSkillData(player_data_split[14])[2]}  

        this.Mining =  {"rank":cleanSkillData(player_data_split[15])[0],
                        'level':cleanSkillData(player_data_split[15])[1],
                        'xp':cleanSkillData(player_data_split[15])[2]}

        this.Herblore =  {"rank":cleanSkillData(player_data_split[16])[0],
                        'level':cleanSkillData(player_data_split[16])[1],
                        'xp':cleanSkillData(player_data_split[16])[2]}  

        this.Agility =  {"rank":cleanSkillData(player_data_split[17])[0],
                        'level':cleanSkillData(player_data_split[17])[1],
                        'xp':cleanSkillData(player_data_split[17])[2]}

        this.Thieving =  {"rank":cleanSkillData(player_data_split[18])[0],
                        'level':cleanSkillData(player_data_split[18])[1],
                        'xp':cleanSkillData(player_data_split[18])[2]}   

        this.Slayer =  {"rank":cleanSkillData(player_data_split[19])[0],
                        'level':cleanSkillData(player_data_split[19])[1],
                        'xp':cleanSkillData(player_data_split[19])[2]}

        this.Farming =  {"rank":cleanSkillData(player_data_split[20])[0],
                        'level':cleanSkillData(player_data_split[20])[1],
                        'xp':cleanSkillData(player_data_split[20])[2]}       

        this.Runecrafting =  {"rank":cleanSkillData(player_data_split[21])[0],
                        'level':cleanSkillData(player_data_split[21])[1],
                        'xp':cleanSkillData(player_data_split[21])[2]}

        this.Hunter =  {"rank":cleanSkillData(player_data_split[22])[0],
                        'level':cleanSkillData(player_data_split[22])[1],
                            'xp':cleanSkillData(player_data_split[22])[2]}  

        this.Construction =  {"rank":cleanSkillData(player_data_split[23])[0],
                        'level':cleanSkillData(player_data_split[23])[1],
                        'xp':cleanSkillData(player_data_split[23])[2]}
                
        


        this.ClueScrollAll =  {"rank":cleanMinigameData(player_data_sorted[24])[0],
                                'score':cleanMinigameData(player_data_sorted[24])[1]}
            
        this.ClueScrollBeginner =  {"rank":cleanMinigameData(player_data_sorted[25])[0],
                                 'score':cleanMinigameData(player_data_sorted[25])[1]}
                
        this.ClueScrollEasy =  {"rank":cleanMinigameData(player_data_sorted[26])[0],
                                 'score':cleanMinigameData(player_data_sorted[26])[1]}
            
        this.ClueScrollMedium =  {"rank":cleanMinigameData(player_data_sorted[27])[0],
                                'score':cleanMinigameData(player_data_sorted[27])[1]}
        
        this.ClueScrollHard =  {"rank":cleanMinigameData(player_data_sorted[28])[0],
                                 'score':cleanMinigameData(player_data_sorted[28])[1]}
        
        this.ClueScrollElite =  {"rank":cleanMinigameData(player_data_sorted[29])[0],
                                 'score':cleanMinigameData(player_data_sorted[29])[1]}
        
        this.ClueScrollMaster =  {"rank":cleanMinigameData(player_data_sorted[30])[0],
                  'score':cleanMinigameData(player_data_sorted[30])[1]}
        }

  }

  const minigameNames = [
    "League Points",
    "Deadman Points",
    "Bounty Hunter - Hunter",
    "Bounty Hunter - Rogue",
    "Bounty Hunter (Legacy) - Hunter",
    "Bounty Hunter (Legacy) - Rogue",
    "Clue Scrolls (all)",
    "Clue Scrolls (beginner)",
    "Clue Scrolls (easy)",
    "Clue Scrolls (medium)",
    "Clue Scrolls (hard)",
    "Clue Scrolls (elite)",
    "Clue Scrolls (master)",
    "LMS - Rank",
    "PvP Arena - Rank",
    "Soul Wars Zeal",
    "Rifts closed",
    "Colosseum Glory",
    "Abyssal Sire",
    "Alchemical Hydra",
    "Araxxor",
    "Artio",
    "Barrows Chests",
    "Bryophyta",
    "Callisto",
    "Calvar'ion",
    "Cerberus",
    "Chambers of Xeric",
    "Chambers of Xeric Challenge Mode",
    "Chaos Elemental",
    "Chaos Fanatic",
    "Commander Zilyana",
    "Corporeal Beast",
    "Crazy Archaeologist",
    "Dagannoth Prime",
    "Dagannoth Rex",
    "Dagannoth Supreme",
    "Deranged Archaeologist",
    "Duke Sucellus",
    "General Graardor",
    "Giant Mole",
    "Grotesque Guardians",
    "Hespori",
    "Kalphite Queen",
    "King Black Dragon",
    "Kraken",
    "Kree'Arra",
    "K'ril Tsutsaroth",
    "Lunar Chests",
    "Mimic",
    "Nex",
    "Nightmare",
    "Phosani's Nightmare",
    "Obor",
    "Phantom Muspah",
    "Sarachnis",
    "Scorpia",
    "Scurrius",
    "Skotizo",
    "Sol Heredit",
    "Spindel",
    "Tempoross",
    "The Gauntlet",
    "The Corrupted Gauntlet",
    "The Leviathan",
    "The Whisperer",
    "Theatre of Blood",
    "Theatre of Blood Hard Mode",
    "Thermonuclear Smoke Devil",
    "Tombs of Amascut",
    "Tombs of Amascut Expert Mode",
    "TzKal-Zuk",
    "TzTok-Jad",
    "Vardorvis",
    "Venenatis",
    "Vet'ion",
    "Vorkath",
    "Wintertodt",
    "Zalcano",
    "Zulrah"
  ];
  function test(){
    data = JSON.parse(document.getElementById('player_data').textContent);
    const PlayerInformation = new PlayerData(data);

    data = JSON.parse(document.getElementById('player_data').textContent);
    player_data_split = data.split('\\')
    player_data_split = player_data_split.splice(24, player_data_split.length - 1);



    var arrayLength = player_data_split.length;
    minigameNamesSorted = []
    playerDataSorted = []
    for (var i = 0; i < arrayLength; i++) {
        if(player_data_split[i] !='n-1,-1'){
      
            minigameNamesSorted.push(minigameNames[i])
            playerDataSorted.push(player_data_split[i])
        }
        else{
        
        }
        //Do something
    }
    alert(minigameNamesSorted)
    }
  function cleanSkillData(data){
    data_split = data.split(',')
    rank = data_split[0]
    level = data_split[1]
    xp = data_split[2]
    return [rank.substring(1,rank.length),level,xp]
  }

  function cleanMinigameData(data){

    minigame = data.split(',')
    rank = minigame[0]
    score = minigame[1]

    return [rank.substring(1,rank.length),score]
  }

  function generateTableSkills() {
    // clean data
    data = JSON.parse(document.getElementById('player_data').textContent);
    var player_data_split = data.split('\\')
    var player_data_sorted = player_data_split.filter(function (index) {
        return index !== 'n-1,-1';
    });

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    tbl.style.border = "none"
    const tblBody = document.createElement("tbody");
    tbl.style.color ="black"
    tblBody.style.color ="black"
    const title = document.createElement("tr");



    const skill = document.createElement("th");
    const rank = document.createElement("th");
    const level = document.createElement("th");
    const xp = document.createElement("th");

    

    skill.style.textAlign = "left" 
    rank.style.textAlign = "right" 
    level.style.textAlign = "right"  
    xp.style.textAlign = "right"  


    skill.style.padding = "7px"
    rank.style.padding = "7px"
    level.style.padding = "7px"
    xp.style.padding = "7px"
     
        

    const skillcellText = document.createTextNode("Skill");
    const rankcellText = document.createTextNode("Rank");
    const levelcellText = document.createTextNode("Level");
    const xpcellText = document.createTextNode("XP");

    skill.appendChild(skillcellText);
    title.appendChild(skill);
    rank.appendChild(rankcellText);
    title.appendChild(rank);
    level.appendChild(levelcellText);
    title.appendChild(level);
    xp.appendChild(xpcellText); 
    title.appendChild(xp);
    tbl.appendChild(title);
    // creating all cells
    for (let i = 0; i < 24; i++) {
        SkillNames = ["Overall", "Attack", "Defence", "Strength", "HitPoints",
            "Ranged", "Prayer", "Magic", "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking",
             "Crafting", "Smithing", "Mining", "Herblore", "Agility", "Thieving", "Slayer", "Farming", "Runecrafting", "Hunter", "Construction"]
      // creates a table row
      row = document.createElement("tr");
      var img = document.createElement("IMG");
        url = "/static/images/rstoolsimg/skills/"+SkillNames[i]+".webp"
        img.src = url;
        img.style.position = "relative";
        img.style.width = "17%";
        img.style.textAlign = "center";
        img.style.paddingRight = "5px";
        img.style.display = "inline";
        row.style.textAlign = "left";
       

      const cell = document.createElement("td");
      cell.style.display = "inline";

      const cellText = document.createTextNode(SkillNames[i]);
      cell.appendChild(img);
     
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (let j = 0; j < 3; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        cell.style.textAlign = "right"
        cell.style.padding = "7px"
  
  
        formatted = numberWithCommas(Number(cleanSkillData(player_data_sorted[i])[j]))
        if (formatted == "NaN") {
            formatted = numberWithCommas(Number(cleanSkillData(player_data_sorted[i].substring(1, player_data_sorted[i].length - 1))[j]))
        }
        
        const cellText = document.createTextNode(formatted);
      
            cell.appendChild(cellText);
            row.appendChild(cell);
        
  
        
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById("table_location").appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }  


  function generateTableMingames() {
    // clean data

    data = JSON.parse(document.getElementById('player_data').textContent);
    player_data_split = data.split('\\')
    player_data_split = player_data_split.splice(24, player_data_split.length - 1);



    var arrayLength = player_data_split.length;
    minigameNamesSorted = []
    playerDataSorted = []
    for (var i = 0; i < arrayLength; i++) {
        if(player_data_split[i] !='n-1,-1'){
       
            minigameNamesSorted.push(minigameNames[i])
            playerDataSorted.push(player_data_split[i])
        }
        else{
        
        }
    }
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    tbl.style.border = "none"
    const tblBody = document.createElement("tbody");
    tbl.style.color ="black"
    tblBody.style.color ="black"
    const title = document.createElement("tr");


    const minigame = document.createElement("th");
    const rank = document.createElement("th");
    const score = document.createElement("th");

    minigame.style.textAlign = "left" 
    rank.style.textAlign = "right" 
    score.style.textAlign = "right"  

    minigame.style.padding = "7px"
    rank.style.padding = "7px"
    score.style.padding = "7px"

    
    const minigamecellText = document.createTextNode("Minigame");
    const rankcellText = document.createTextNode("Rank");
    const scorecellText = document.createTextNode("Score");

    minigame.appendChild(minigamecellText);
    title.appendChild(minigame);

    rank.appendChild(rankcellText);
    title.appendChild(rank);
    score.appendChild(scorecellText);
    title.appendChild(score);
    
    tbl.appendChild(title);
    // creating all cells
    for (let i = 0; i < minigameNamesSorted.length -1; i++) {
       
        
      // creates a table row
      row = document.createElement("tr");
      var img = document.createElement("IMG");
        url = "/static/images/rstoolsimg/minigame/"+minigameNamesSorted[i]+".png"
        img.src = url;
        img.style.position = "relative";
        img.style.width = "13%";
        img.style.textAlign = "center";
        img.style.paddingRight = "5px";
        img.style.display = "inline";
        row.style.textAlign = "left";

        const cell = document.createElement("td");
     

      const cellText = document.createTextNode(minigameNamesSorted[i]);
      cell.appendChild(img);
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (let j = 0; j < 2; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        cell.style.textAlign = "right"
        cell.style.padding = "7px"
        const cellText = document.createTextNode(numberWithCommas(Number(cleanSkillData(playerDataSorted[i])[j])));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById("table_location").appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }  


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}