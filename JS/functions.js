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
var MysteryWord = document.getElementById("mysteryWord")
// var PushWordToArray = MysteryWord.value.split("")
var Letters = []
var guessLetters = []
var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]

function InsertWord(){
    for(i = 0; i < MysteryWord.value.length; i++){
        Letters.push(MysteryWord.value[i])
    }
    console.table(Letters)
    document.getElementById("userWordDiv").hidden = true
    document.getElementById("playerLetterGuess").hidden = false;
}

function GuessLetter(){
    var Guess = document.getElementById("LetterGuess")
    // console.log(Guess.value.split(""))
    if(Letters.includes(Guess.value)){
        guessLetters.push(Guess.value)    
        console.log("Yes this is in the word.")
    }
    else{
        console.log("Still no luck!")
    }
      Guess.value = ""  
    }

    function SeeGuess(){
        console.table(guessLetters)
    }






function Test(){
    // var MysteryWord = document.getElementById("mysteryWord").value
    [...MysteryWord].forEach(c => console.log(c))
    // document.getElementById("TestDiv").appendChild(document.createElement("input"))
}

//dice game

let playerOneScore = 0; 
let playerTwoScore = 0; 

function RollPlayerOne(){
    let dice = Math.floor(Math.random()*6)+1
    
    document.getElementById("playerOneDice").innerText = dice
    if(playerOneScore < 21){
        document.getElementById("winningText").hidden = true; 
    if(dice != 6){  
         
        playerOneScore += dice
        document.getElementById("rolledSixText").hidden = true;
    }
    else{
        playerOneScore = 0;
        document.getElementById("rolledSixText").hidden = false;
        document.getElementById("playerOneRollButton").disabled = true;
        document.getElementById("playerOneRollButton").disabled = false;
    }
}
    else{
      document.getElementById("winningText").hidden = false;  
      document.getElementById("scoreTextbox").hidden = true;
    }
    
    document.getElementById("scoreTextbox").innerText = playerOneScore
}

function RollPlayerTwo(){
    let dice = Math.floor(Math.random()*6)+1
    
    document.getElementById("playerTwoDice").innerText = dice
    if(playerTwoScore < 21){
        document.getElementById("winningText").hidden = true; 
    if(dice != 6){  
         
        playerTwoScore += dice
        document.getElementById("rolledSixText").hidden = true;
    }
    else{
        playerTwoScore = 0;
        document.getElementById("rolledSixText").hidden = false;
    }
}
    else{
      document.getElementById("winningText").hidden = false;  
      document.getElementById("playerTwoScoreTextbox").hidden = true;
    }
    
    document.getElementById("playerTwoScoreTextbox").innerText = playerTwoScore
}

