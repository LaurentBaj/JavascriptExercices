var outputList = document.getElementsByTagName("li"); 
var numberOfLi = outputList.length; 

for(var i = 0; i < numberOfLi; i++){
    var randomNumber = Math.floor(Math.random()*100);
    outputList[i].innerHTML = `${randomNumber} `; 
}; 


