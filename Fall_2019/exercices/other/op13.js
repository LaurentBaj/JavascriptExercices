var txtBox = document.getElementById("txtBox"); 
var output = document.getElementById("output"); 
var btn1 = document.getElementById("btn"); 

btn1.onclick = function btn(){
    var input = txtBox.value.toUpperCase(); 
    output.innerHTML = getInformation(input);
}

function getInformation( type ){
    
    var txt = ""; 

    switch(type){
        case "PROGRAMMING": 
            txt = `<p>"Programmering er jævla lett as!"</p>`
        break;
        case "FITTE":
            txt = `<p>"Fitte er jævla deilig"</p>`
        break; 
        default: 
            txt = `<p>Vet ikke hva du snakker om brosjan</p>`; 
    }
    return txt; 
}
