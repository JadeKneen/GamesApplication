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
