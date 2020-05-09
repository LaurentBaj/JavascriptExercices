//Create some arrays 
const numbers = [44, 33, 62, 17, 37, 2];
const numbers2 = new Array(22, 45, 61, 756, 34); 
const fruit = ["Apple", "Orange", "Pear"];
const fruit = ["Apple", 3, true, undefined, {a:1, b:1}, new Date()];

let val; 

//Getting the Array length
val = numbers.length; 
//Check if is an arrray, gives us boolean answer
val = Array.isArray("hello"); 

//Get a single value, arrays are zero-based in every language
val = numbers[3];
val = numbers[0];

//Insert into array
numbers[2] = 100; 

//Find index of value
val = numbers.indexOf(36);

//Mutating arrays
numbers.push(250); 

//Add to front
numbers.unshift(32); 

//take off from end
numbers.pop(); 

// Take off from front 
numbers.shift(); 

//Splice values 
numbers.splice(1, 1);

//REVERSE
numbers.reverse(); 

//Concat array
val = numbers.concat(numbers2); 

//Sorting Arrays: Strenger blir sortert alfabetisk 
val = fruit.sort(); 


