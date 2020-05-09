var Adder = document.getElementById("addBtn"); 
var Subtraher = document.getElementById("subBtn"); 
var Multipliser = document.getElementById("multiBtn"); 
var Divider = document.getElementById("divBtn"); 

var txtBox1 = document.getElementById("txtBox1"); 
var txtBox2 = document.getElementById("txtBox2"); 
var tall1 = txtBox1.value;  
var tall2 = txtBox2.value;  

var outputP = document.getElementById("outputP"); 

Adder.onclick = addBtn; 
Subtraher.onclick = subBtn; 
Multipliser.onclick = multiBtn; 
Divider.onclick = divBtn;

var number1, number2, sum; 
number1 = tall1;
number2 = tall2; 


function addBtn(){
    var resultat = number1 + number2; 
    outputP.innerHTML = alert(resultat);
}

function subBtn(){
    var resultat = number1 - number2;
    outputP.innerHTML = alert(resultat); 
}

function multiBtn(){
    var resultat = number1 * number2; 
    outputP.innerHTML = alert(resultat);
}

function divBtn(){
    var resultat = number1/number2; 
    outputP.innerHTML = alert(resultat);
}