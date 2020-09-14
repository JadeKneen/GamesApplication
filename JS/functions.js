//create a story game

function OnSubmit() {
    document.getElementById("answerTextbox").innerHTML 
    += document.getElementById("userInput").value + " "

    document.getElementById("userInput").value = ""
}

function Reveal(){
    document.getElementById("answerTextbox").hidden = false;
}

function Hide(){
    document.getElementById("answerTextbox").hidden = true;
}

function Reset(){
    document.getElementById("answerTextbox").innerHTML = "";
}

//hangman game

var MysteryWord = document.getElementById("mysteryWord").value
var Letters = []

for (i = MysteryWord[0]; i < MysteryWord.length; i++) {
    console.log(i)
  }




function Test(){
    // var MysteryWord = document.getElementById("mysteryWord").value
    [...MysteryWord].forEach(c => console.log(c))
    // document.getElementById("TestDiv").appendChild(document.createElement("input"))
}

//dice game

let score = 0; 
function RollPlayerOne(){
    let dice = Math.floor(Math.random()*6)+1
    
    document.getElementById("playerOneDice").innerText = dice
    if(score < 21){
        document.getElementById("winningText").hidden = true; 
    if(dice != 6){  
         
        score += dice
        document.getElementById("rolledSixText").hidden = true;
    }
    else{
        score = 0;
        document.getElementById("rolledSixText").hidden = false;
    }
}
    else{
      document.getElementById("winningText").hidden = false;  
      document.getElementById("scoreTextbox").hidden = true;
    }
    
    document.getElementById("scoreTextbox").innerText = score
}

function RollPlayerTwo(){
    var result = Math.floor(Math.random()*6)+1
    document.getElementById("playerTwoDice").innerText = result
    if(result == 6){
        console.log("Oops you rolled a six")
    }
    else{
        console.log(result)
    }
}
