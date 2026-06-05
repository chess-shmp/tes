window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "rgba(5,8,22,.95)";
}else{
header.style.background = "rgba(5,8,22,.8)";
}

});

const texts = [
"/analyze BBRI",
"/analyze BBCA",
"/analyze TLKM",
"/analyze ASII"
];

let index = 0;

setInterval(() => {

const cmd = document.querySelector(".terminal-body span");

if(cmd){
cmd.innerText = texts[index];
index++;

if(index >= texts.length){
index = 0;
}
}

},2500);
