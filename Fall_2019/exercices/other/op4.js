var outputP = document.getElementById("output-p"); 

var prompt1 = prompt("Hva slags kjæledyr eier jeg?").toUpperCase(); 

switch(prompt1){
    case "FISK": 
        alert("Riktig!"); 
    break; 
    case "HUND":
        alert("feil")
    break; 
    case "KATT": 
        alert("feil!")
    break; 
    case "MEKSIKANER":
        alert("Riktig!"); 
    break;
    case "VUVUZELA":
        alert("Rikig!")
    break; 
    default: 
        alert("Feil!"); 
}
