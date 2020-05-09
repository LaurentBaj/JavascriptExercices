var nyhetBtn1 = document.getElementById("nyhetBtn"); 
var outputDiv = document.getElementById("output-div");

nyhetBtn1.onclick = nyhetBtn;

var objecter = [
    {
        title: "Kjekk proggstudent kjøper monitor!",
        content: "En tirsdags kveld",
        image: `<img src="IMG/knight.jpg">`,
        author: "Laurent Bajrami",
        date: "12.12.2019"
    },

    {
        title: "Kjekk proggstudent kjøper monitor!",
        content: "En tirsdags kveld",
        image: `<img src="IMG/knight.jpg">`,
        author: "Laurent Bajrami",
        date: "12.12.2019"
    },

    {
        title: "Kjekk proggstudent kjøper monitor!",
        content: "En tirsdags kveld",
        image: `<img src="IMG/knight.jpg">`,
        author: "Laurent Bajrami",
        date: "12.12.2019"
    }
]; 

var objectExit = ""
    
function nyhetBtn(){
    for(var i = 0; i < objecter.length; i++){
        objectExit += `
            <h1>${objecter[i].title}</h1>
            ${objecter[i].content}
            ${objecter[i].image}
            <p>${objecter[i].author}</p> 
            <p>${objecter[i].date}</p> 
        `; 
    outputDiv.innerHTML = objectExit; 
    }
}