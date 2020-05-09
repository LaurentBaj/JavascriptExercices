var outputH = document.getElementById("output-h");
var outputList = document.getElementById("output-list");

var catOwnerArray = [
    {
        name: "Laurent",
        cats: [
            {
                name: "Skløtta"
            },
            {
                name: "Fisk"
            }
        ]

    },
    {
        name: "Henrik",
        cats: [
            {
                name: "Maya"
            },
            {
                name: "Luna"
            }
        ]

    },
    {
        name: "Kai",
        cats: [
            {
                name: "Gucci"
            },
            {
                name: "Versace"
            }
        ]

    }
];

for(var i = 0; i < catOwnerArray.length; i++){
    outputH.innerHTML += `<h1>${catOwnerArray[i].name}</h1> `

    for(var i2 = 0; i2 < catOwnerArray[i].cats.length; i2++){
        outputList.innerHTML += `<li>${catOwnerArray[i].cats[i2].name}</li> `; 
    }
}