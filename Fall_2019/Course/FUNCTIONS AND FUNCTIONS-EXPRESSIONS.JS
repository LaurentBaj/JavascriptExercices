// Function declarations 

function greet () {
    // console.log("Hello");
    return "Hello"; 
}

// greet(); 
console.log(greet());

//FUNCTIONS PARAMETERS 
function greet (firstName, lastName) {
    // console.log("Hello");
    return "Hello" + firstName + " " + lastName;
}

// greet(); 
console.log(greet("John", "Doe")); //Returnerer: Hello John Doe


// FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
}; 

console.log(square(8)); //Returnerer 64


// IMMIDEATLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs 

(function(){
    console.log("IIFE ran..");
})();                               // Returns: IFFE Ran..

// We can put Parameters in these aswell 

(function(name){
    console.log("Hello" + name);
})("Brad");                         // Returns: Hello Brad        


// Property methods 

const todo = {
    add: function(){
        console.log("add todo"); 
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);  
    }
}

// IT is possible to mutate the object from outside 
todo.delete = function(){
    console.log("Delete todo");
}


