var txtBox = document.getElementById("text-box");
var output = document.getElementById("output");  
var txtBtn1 = document.getElementById("text-Btn"); 
 
txtBtn1.onclick = txtBtn; 

function txtBtn(){
    var input = txtBox.value;
    switch(input){
        case "Ridder":
            output.innerHTML = `<img src="IMG/knight.jpg">`
        break; 
        case "Kjempe": 
            output.innerHTML = `<img src="IMG/giant.png">`
        break;
        case "Spydmann":
            output.innerHTML = `<img src="IMG/spydfolk.png">`
        break; 
        default:
            output.innerHTML = `<p>Enheten du har tastet inn finnes ikke</p>`
    }   
}

