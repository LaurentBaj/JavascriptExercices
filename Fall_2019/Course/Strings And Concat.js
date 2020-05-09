const firstName = "William"; 
const lastName = "Johnson"; 
const age = 32; 
const str = "Hello, my name is Henrik"; 

let val; 

val = firstName + lastName; //Gir WilliamJohnson

// Concatenation 
val = firstName + "" + lastName; //Gir William Johnson

// Apend 
val = "brad"; // gir Brad
val += "Traversy"; // Legger til Traversy og vi får Brad Traversy med mellomrom

val = "Hello, my name is " + firstName + "and I am" + age; 


// Concat
val = firstName.concat(" ", lastName); // Gir oss William Johnson

// Change case
val = firstName.toUpperCase(); 
val = firstName.toLowerCase(); 

// indexOf() finner indeksen/plassen til et tegn i en variabel
val = firstName.indexOf("l"); //Gir oss 2 fordi l har indeks 2 i navnet/variabelen William  
val = firstName.lastIndexOf("l");  //Teller fra motsatt side og vi får 3

// charAt()
val = firstName.charAt("2"); //Gir oss l
val = firstName.charAt(firstName.length - 1); //Gir siste bokstaven som er m

// Substring() og Split()
val = firstName.substring(0, 4); //Gir oss Will
val = str.split(" "); // Gjør str til array = "Hello", "my", "name", "is", "Henrik"

// replace()
val = str.replace("Brad", "Jack"); //Erstatter Brad med Jack i str

// includes()
val = str.includes("hello") //gir boolsk verid, i dette tilfellet er true
