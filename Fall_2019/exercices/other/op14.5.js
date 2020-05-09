var outputList = document.getElementById("output-list");
var outputImg = document.getElementById("outputImg");
var btn1 = document.getElementById("btn");
var txtBox = document.getElementById("txtBox");

btn1.onclick = btn; 

var enheter = ["Kjempe", "Ridder", "Spydfolk"]; 
var numberOfEnheter = enheter.length; 

for(var i = 0; i < numberOfEnheter; i++){
    outputList.innerHTML += `<li>${enheter[i]}</li> `;  
}

function btn(){
    
    var input = txtBox.value; 
    
    // switch(input){
    //     case "Ridder":
    //         outputImg.innerHTML = `<img src="IMG/knight.jpg"> `
    //     break;
    //     case "Kjempe":
    //         outputImg.innerHTML = `<img src="IMG/giant.png"> `
    //     break;
    //     case "Spydfolk":
    //         outputImg.innerHTML = `<img src="IMG/spydfolk.jpg"> `
    //     break;
    //     default: 
    //         outputImg.innerHTML = "Enheten finnes ikke"; 
    // }

    if( input === enheter[1] ){
        outputImg.innerHTML = `<img src="IMG/knight.jpg"> `;
    
    } else if( input === enheter[0] ){
        outputImg.innerHTML = `<img src="IMG/giant.png"> `
    } else if( input === enheter[2]){
        outputImg.innerHTML = `<img src="IMG/spydfolk.jpg"> `
    } else {
        outputImg.innerHTML = "Enheten finnes ikke"; 
    }
}; 

