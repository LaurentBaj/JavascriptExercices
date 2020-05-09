let val = 5; 

// NUMBER TO STRING*
val = 5; 

// Output verdi: 1, Number og Undefined(fordi length bare funker strings) 
console.log(val);
console.log(typeof val);
console.log(val.length); 

//FØRSTE METODE- NUMMER TIL STRING
val = String(5); 
val = String(555); //Val får ny verdi som er en string og og nå funker .length = 3
val = String(4+4); //Consol.log viser stringen 8

//Bool to string
val  = String(true) //  Viser True og length = 4
val = String(new Date()); //Viser dagens dato som er en string og lengden = 57

//Array til string
val = String([1,2,3,4]); //Gir oss verdien inne i Array-et som  nå er strenger

//ANDRE METODE 
val = (5).toString(); 
val = (true).toString(); 


//STRING TO NUMBER*
val = "5"; 
val = Number("5"); 

//Output: Videre: .toFixed(antall desimaler etter 5); Consol.log(val.toFixed(2)) = 5.00
console.log(val);
console.log(typeof val);

val = Number(true); //Gir oss nummeret 1
val = Number(false); //Gir oss nummeret 0
val = Number(false); //Gir oss nummeret 0
val = Number("Hello"); //Gir oss NaN
val = Number([1,2,3]); //Gir oss også NaN

val = parseInt("100.3"); //Gir oss 100
val = parseFloat("100.3"); //Gir oss 100.3

const val1 = 5;
const val2 = 6;
const sum = val1 + val2; //Begge er Int så da kan de regns matematisk. 

//TYPE COERCION
val1 = String(5);
val2 = 6;
/* Sum blir nå strengen 56 fordi strengen val1 
tvinger val2 til å bli en streng. Dette er TYPE COERSION*/





 