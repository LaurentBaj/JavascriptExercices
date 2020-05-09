var textBox1 = document.getElementById("textBox1");
var textBox2 = document.getElementById("textBox2");
var output = document.getElementById("output"); 

var Btn1 = document.getElementById("Btn"); 
Btn1.onclick = Btn; 

function Multipliser(number1, number2){
    var resultat = (number1 * number2); 
    return resultat; 
}

function Btn(){
    var gæj = Multipliser(textBox1.value, textBox2.value)
    output.innerHTML = `${textBox1.value} * ${textBox2.value} = ${gæj}`; 
    //Eller output.innerHTML = `${textBox1.value} * ${textBox2.value} = ${Multipliser(textBox1.value, textBox2.value)}`
}


