var txtBox1 = document.getElementById("txtBox1"); 
var btn1 = document.getElementById("btn"); 
var output = document.getElementById("output"); 
var outputList = document.getElementById("output-list"); 

btn1.onclick = btn; 
var i = 0;

function btn(){
    i++
    var userInput1 = txtBox1.value; 
    output.innerHTML = `Antall superhelter: ${i} `; 
    outputList.innerHTML += `<li>Navn: ${userInput1}</li> `;  
    userInput1 = ""; 
}


