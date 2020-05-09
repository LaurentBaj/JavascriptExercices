//Henter HTML-elementene
var outputBestilling = document.getElementById("outputBestilling"); 
var outputTip = document.getElementById("outputTip"); 
var outputAntall = document.getElementById("outputAntall"); 
var output = document.getElementById("output"); 
var userInput = document.getElementById("userInput"); 
var userBtn1 = document.getElementById("userBtn");
var userTip = document.getElementById("userTip");
var userTipBtn1 = document.getElementById("userTipBtn"); 
var antall = document.getElementById("antall");
var antallBtn1 = document.getElementById("antallBtn"); 
var kvitteringBtn1 = document.getElementById("Kvittering"); 

//Lager knapper
userBtn1.onclick = userBtn; 
userTipBtn1.onclick = userTipBtn; 
antallBtn1.onclick = antallBtn; 
kvitteringBtn1.onclick = kvitteringBtn; 

//Oppretter Meny 
var biff, fisk, grøt, kaffe, brus; 
biff = 200; 
fisk = 170;
grøt = 50;
kaffe = 50; 
brus = 30; 

//Aktiviserer knappene
function userBtn(){
    var order = userInput.value; 
    outputBestilling.innerHTML += order; 
    return order;   
}

function userTipBtn(){
    var tip = userTip.value; 
    outputTip.innerHTML = tip;
    return tip;  
}

function antallBtn(){
    var antallP = antall.value; 
    outputAntall.innerHTML = antallP; 
    return antallP; 
}

function kvitteringBtn() {
    var sum = (userBtn() + userTipBtn())/antallBtn(); 
    output.innerHTML = `${order} + ${tip}. Antall personer: ${antallP}. Sum: ${sum} `; 
}
