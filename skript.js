var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.createElement("button");
var colors = [];

//2.
setGradient();

//1.
function setGradient(){
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

css.textContent = body.style.background + ";";
}

function randomHex(){
var length = 6;
var chars = '0123456789ABCDEF';
var hex = '#';
while(length--) hex += chars[(Math.random() * 16) | 0];
return hex;
}

function randomGradient(){
//push random colors to array
colors.push(randomHex());
colors.push(randomHex());

//set gradient colors
color1.value = colors[0];
color2.value = colors[1];

setGradient();

//clear array
colors = [];
}

//3.
randomBtn.appendChild(document.createTextNode('Generate'));
body.appendChild(randomBtn);

randomBtn.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);