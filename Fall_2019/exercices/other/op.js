//Henter alle DOM-objekter 
var knightoutput = document.getElementById("knightOutput"); 
var giantOutput = document.getElementById("giantOutput"); 
var spydfolktOutput = document.getElementById("spydfolktOutput"); 
var knigh = document.getElementById("knight"); 
var giant = document.getElementById("giant"); 
var spydfolk = document.getElementById("spydfolk"); 

//Tre spørsmål som henter bestillingen + velkomst
var startAlert, howManyKnights, howManyGiants, howManySpears; 
startAlert = alert("Deres majestet er under angrep! Hvor mange av hver enhet trenger dem?"); 
howManyKnights = parseInt(prompt("Hvor mange riddere ønsker du?")); 
howManyGiants = parseInt(prompt("Hvor mange kjemper ønsker du?")); 
howManySpears = parseInt(prompt("Hvor mange spydfolk ønsker du?")); 

//Lager løkker som henter ut enhetene 
for(var i = 0; i < howManyKnights; i++ ){
    knightoutput.innerHTML = `Antall riddere: ${i + 1} `; 
    knight.innerHTML += `<img src="IMG/knight.jpg">`; 
}

for(var i = 0; i < howManyGiants; i++ ){
    giantOutput.innerHTML = `Antall kjemper: ${i + 1} `; 
    giant.innerHTML += `<img src="IMG/giant.png">`; 
}

for(var i = 0; i < howManySpears; i++ ){
    spydfolktOutput.innerHTML = `Antall spydfolk: ${i + 1} `; 
    spydfolk.innerHTML += `<img src="IMG/spydfolk.jpg">`; 
}