let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.createElement("button");
let colors = [];

setGradient();

function setGradient(){
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

css.textContent = body.style.background + ";";
}

function randomHex(){
let length = 6;
let chars = '0123456789ABCDEF';
let hex = '#';
while(length--) hex += chars[(Math.random() * 16) | 0];
return hex;
}

function randomGradient(){
colors.push(randomHex());
colors.push(randomHex());

color1.value = colors[0];
color2.value = colors[1];

setGradient();

colors = [];
}

randomBtn.appendChild(document.createTextNode('Generate'));
body.appendChild(randomBtn);

randomBtn.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
