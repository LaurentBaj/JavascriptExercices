var taskBtn1 = document.getElementById("task-Btn");
var output1 = document.getElementById("output-div"); 
var output2 = document.getElementById("output-div2"); 
 
var tittel = document.getElementById("tittel"); 
var beskrivelse = document.getElementById("beskrivelse"); 
var proritetskode = document.getElementById("proritetskode");

// var allDiv = document.getElementsByTagName("div"); 
// for(var i = 0; i < allDiv.length; i++){
//     allDiv[i].style.display = "block"; 
// }

taskBtn1.onclick = taskBtn; 

var counter = 1;

function taskBtn(){
    var inputTittel = tittel.value;
    var inputBeskrivelse = beskrivelse.value;
    var InputProritetskode = proritetskode.value;
    
    var colorMe = `task${counter}`;

    var makeElement = `
    <div id = "${colorMe}">
        <h1>${inputTittel}</h1>
        <p>${inputBeskrivelse}</p>
    </div>
    ` 
    var counter1 = document.getElementById("colorMe");
  
    counter++; 

    output1.innerHTML += makeElement; 

    counter1.style.backgroundColor += InputProritetskode; 

    inputBeskrivelse = "";
}



