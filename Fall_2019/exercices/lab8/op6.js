var btn = document.getElementById("btn");
var output = document.getElementById("output"); 

btn.onclick = function multi(){
    a = Math.floor(Math.random()*10); 
    b = Math.floor(Math.random()*10); 
    var c = (a * b); 
    output.innerHTML = `${a} * ${b} = ${c} `; 
}; 
