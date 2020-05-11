let i1 = document.getElementById("i1"); 

let wordArray = []; 
let keepGoing = true; 
let input = ""; 
let input2 = ""; 

while(keepGoing){
    input1 = prompt("Ønsker du å legge til et nytt ord"); 

    if(input1 === "ja" || input1 === "Ja"){
        input2 = prompt("Legg til ordet under:"); 
        wordArray.push(input2); 
    } else {
        keepGoing = false; 
    }
}

for(let i = 0; i < wordArray.length; i++){
    i1.innerHTML += `${wordArray[i]} `;
}

