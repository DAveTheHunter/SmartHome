//define HTML variables
let leackage = document.getElementById('leackage')
let blockage = document.getElementById('blockage')
let window = document.getElementById('window')
let door = document.getElementById('door')
let tv = document.getElementById('tv')
let bulb1 = document.getElementById('bulb1');
let bulb2 = document.getElementById('bulb2');
let bulb3 = document.getElementById('bulb3');

//define the url for arduinio 
const url = '127.0.0.1:5000/api/alerts'

async function fetchInfo(url){
    const data = await fetch(url)
    const responce = await data.json();
}

function checkStatus(){
   if()
}

fetchInfo();