var output = document.getElementById("output");
var boks1 = document.getElementById("boks1");
var boks2 = document.getElementById("boks2");
var btn = document.getElementById("btn"); 

btn.onclick = function outprint() {
    var input1 = boks1.value;
    var input2 = boks2.value;
    var res = multi(input1, input2); 
    output.innerHTML = `${input1} * ${input2} = ${res} `; 
}; 

function multi(a, b){
    var c = (a * b); 
    return c; 
}; 

