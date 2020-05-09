var output = document.getElementById("output");

var number1, number2; 

var array = [5, 1, 7, 2]; 

number1 = array[0];
number2 = array[1]; 

array[0] = number2; 
array[1] = number1;

//1, 5, 7, 2

number1 = array[2];
number2 = array[3];

array[2] = number2; 
array[3] = number1;

//1527

number1 = array[1];
number2 = array[2];

array[1] = number2; 
array[2] = number1; 

//1257

for(var i = 0; i < array.length; i++){
    output.innerHTML += array[i];  
}
