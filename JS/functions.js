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

function RollPlayerOne(){
    var result = Math.floor(Math.random()*6)+1
    document.getElementById("playerOneDice").innerText = result
}

function RollPlayerTwo(){
    var result = Math.floor(Math.random()*6)+1
    document.getElementById("playerTwoDice").innerText = result
}
