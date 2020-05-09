const num1 = 50; 
const num2 = 100;
let val; 

// Simple math with numbers
val = num1 + num2; 
val = num1 * num2; 
val = num1 - num2; 
val = num1 / num2;

console.log(val); //150, 5000, 50(ikke -50), 2

// Math Object
val = Math.PI; //3.14
val = Math.E; //2.71
val = Math.round(2.8); //Runder til 3 
val = Math.round(2.2); //Runder til 2

//For å spesifisere runding opp eller ned
val = Math.ceil(2.4) //Gir oss 3
val = Math.floor(2.9) //Gir oss 2

//Kvadratrot, neg til pos, multiplisere, minsteverdi, tilfeldig desimal
val = Math.sqrt(64); // 8
val = Math.avs(-3); //3
val = Math.pow(8, 2); // 64
val = Math.min(1, 2, 3, 4) // Gir minste verdi = 1; 
val = Math.random(); //Gir tilfeldig desimal
val = Math.random() * 20 + 1 //Gir tilfeldig desimaltall over 1 til 20
val = Math.floor(Math.random() * 20 + 1); //Gir tilfeldig heltall mellom 1 og 20
