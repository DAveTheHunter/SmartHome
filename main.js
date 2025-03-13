//define status variables
let leackage_s = false;
let blockage_s = false;
let window_s = true;
let door_s = true;
let TV_s = false;
let bulb1_s = false;
let bulb2_s = false;
let bulb3_s = false;
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
const url = ''

async function fetchInfo(url){
    const data = await fetch(url)
    const responce = await data.json();
}

function checkStatus(){
    
}

fetchInfo();