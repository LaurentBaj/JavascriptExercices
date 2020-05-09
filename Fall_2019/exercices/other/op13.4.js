var output = document.getElementById("output"); 
var makeWord1 = document.getElementById("makeWord"); 

makeWord1.onclick = makeWord; 

var alfabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "z"]; 

function makeWord(){
    for(var i = 0; i < 4; i++){
        var noe = alfabetArray[Math.floor(Math.random()*alfabetArray.length)]
        return noe; 
    }
    output.innerHTML += noe; 
}