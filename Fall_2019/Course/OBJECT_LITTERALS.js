const person = {
    firstName: "Steve", 
    lastName: "Smith",
    age: 30,
    email: "steve@aol.com",
    hobbies: ["music", "cunt", "fishing"], 
    address: {
        city: "Miami", 
        state: "Fl"
    },
    getBirthYear: function(){
        return 1987;     }
};  

let val; 

val = person; 
// Get specific value 
val = person.firstName; 
val = person["lastName"]; 


