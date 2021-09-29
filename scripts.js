const api_url = 
      "https://cataas.com/api/cats";
  
// Defining async function
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
getapi(api_url);  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let imgUrl = `<div><div/>`;
    let tagUrl;
    //Loop to access all rows 
    for (let r of data) {
        imgUrl += `<img src=https://cataas.com/cat/${r.id} alt="cats">`;   
    }
    document.getElementById("catlist").innerHTML = imgUrl;     
}

function makeUL() {
   var input = document.getElementById("myInput").value;
   var tagcat = `https://cataas.com/api/cats?tags=${input}`    
    fetch(tagcat)
    .then(response => response.json())
    .then(data => catData(data))
    .catch("error in fetching api data"); 
}

function catData(namelist){
    let imgUrl = `<div><div/>`;
    for (let r of namelist) {
        imgUrl += `<img src=https://cataas.com/cat/${r.id} alt="cats">`;   
    }
    document.getElementById("myForm").innerHTML = imgUrl; 
}      