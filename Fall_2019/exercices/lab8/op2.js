var allLi = document.getElementsByTagName("li"); 
var numberOfLi = allLi.length; 

var wordArray = ["Karo", "Trym", "Peder", "Sindre", "Even", "Thomas"]; 

for(var i = 0; i < numberOfLi; i++){
    allLi[i].innerHTML = wordArray[i]; 
}; 

