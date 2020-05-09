var genDiv1 = document.getElementById("genDiv");
var ColorDiv1 = document.getElementById("ColorDiv");
var ColorDivRød1 = document.getElementById("ColorDivRød");
var ColorDivGrønn1 = document.getElementById("ColorDivGrønn");
var ColorDivBlå1 = document.getElementById("ColorDivBlå");
var ColorDivRandom = document.getElementById("ColorDivRandom");

genDiv1.onclick = genDiv; 
ColorDiv1.onclick = ColorDiv;
ColorDivRød1.onclick = ColorDivRød;
ColorDivGrønn1.onclick = ColorDivGrønn;
ColorDivBlå1.onclick = ColorDivBlå;
ColorDivRandom.onclick = ColorDivRandom1;

var output = document.getElementById("output-div");

function genDiv(){
    for(var i = 0; i < 256; i++){
        output.innerHTML += `<div>${i}</div>`; 
    }
}

function ColorDiv(){
    var output1 = document.getElementById("output-div").getElementsByTagName("div"); 
    for(var i = 0; i < output1.length; i++){
       

        output1[i].style.backgroundColor = `rgb(${i}, ${i}, ${i})`;
        output1[i].style.display = "inline-block"; 
        output1[i].style.width = "30px"; 
        output1[i].style.height = "30px"; 
    }
}

function ColorDivRød(){
    var output1 = document.getElementById("output-div").getElementsByTagName("div"); 
    for(var i = 0; i < output1.length; i++){
        output1[i].style.backgroundColor = `rgb(${i}, 0, 0)`;
        output1[i].style.display = "inline-block"; 
        output1[i].style.width = "30px"; 
        output1[i].style.height = "30px"; 
    }
}


function ColorDivGrønn(){
            var output1 = document.getElementById("output-div").getElementsByTagName("div"); 
    for(var i = 0; i < output1.length; i++){
        output1[i].style.backgroundColor = `rgb(0, ${i}, 0)`;
        output1[i].style.display = "inline-block"; 
        output1[i].style.width = "30px"; 
        output1[i].style.height = "30px"; 
    }
}

function ColorDivBlå(){
    var output1 = document.getElementById("output-div").getElementsByTagName("div"); 

    for(var i = 0; i < output1.length; i++){
        output1[i].style.backgroundColor = `rgb(0, 0, ${i})`;
        output1[i].style.display = "inline-block"; 
        output1[i].style.width = "30px"; 
        output1[i].style.height = "30px"; 
    }
}

function ColorDivRandom1(){
    var output1 = document.getElementById("output-div").getElementsByTagName("div"); 

    for(var i = 0; i < output1.length; i++){
        output1[i].style.backgroundColor = `rgb(${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)}, ${Math.floor(Math.random()* 255)})`
        output1[i].style.display = "inline-block"; 
        output1[i].style.width = "30px"; 
        output1[i].style.height = "30px"; 
    }
}


