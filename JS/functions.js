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
var Letters = []
var BadLetters = []
var guessLetters = []


function InsertWord(){
    for(i = 0; i < MysteryWord.value.length; i++){
        Letters.push(MysteryWord.value[i])
    }
    console.table(Letters)
    document.getElementById("userWordDiv").hidden = true
    document.getElementById("playerLetterGuess").hidden = false;
    CreateBox()
}

//need to create individual boxes per letter
function CreateBox(){
    
    for(i = 0; i < Letters.length; i++){
       var newBox = document.createElement("p")
       var newContent = document.createTextNode(Letters[i])
        newBox.appendChild(newContent)     
        var currentDiv = document.getElementById("TestDiv")
        currentDiv.appendChild(newBox)
    }
}

function GuessLetter(){
    var Guess = document.getElementById("LetterGuess")
    if(Letters.includes(Guess.value)){
        guessLetters.push(Guess.value)    
        console.log("Yes this is in the word. It is letter " + (Letters.indexOf(Guess.value)+1))
        CheckGuessAgainstWord()
        document.getElementById("correctGuesses").innerHTML += Guess.value
    }
    else{
        console.log("Still no luck!")
        BadLetters.push(Guess.value)
        document.getElementById("incorrectGuesses").innerHTML += Guess.value
        CheckHangmanStatus()
    }
      Guess.value = "" 
    }

    function CheckGuessAgainstWord(){
        if(Letters.length == guessLetters.length){
            console.log("Success, you won!! The word was " + MysteryWord.value)
        }
    }

    function CheckHangmanStatus(){
        if(BadLetters.length >= 8){
            console.log("You have ran out of chances. The word was " + MysteryWord.value)
            document.getElementById("GuessButton").disabled = true;
        }
    }

    function SeeGuess(){
        console.table(Letters)
        console.table(BadLetters)
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

