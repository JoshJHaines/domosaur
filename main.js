const heading = document.querySelector("h1");
// const messWithMeMore = document.querySelector(".mess-with-me-more");
const messWithMe = document.querySelector(".mess-with-me");
const hideMe = document.querySelector("#hide-me");
const triTop = document.querySelector("#triceratops");
const feather = document.querySelector("#feathers");
const dinos = document.querySelector("#row");
const biggy = document.querySelector("#biggify")
const button = document.querySelector("#toggle")
// const spanny = document.querySelector("span")

function makeBold() {
	heading.style.fontWeight = 600;
}

// heading.addEventListener("click", makeBold);

messWithMe.style.fontSize = "40px";
messWithMe.style.backgroundColor = "green";

hideMe.style.display = "none";
triTop.style.width = "324px";

function makeOrange() {
    const orangeText = document.querySelector(".mess-with-me");
    orangeText.style.color = "orange";
}

messWithMe.addEventListener("click", makeOrange);


function redBorder(){
    const addRed = document.querySelector("#triceratops");
    addRed.style.border = "2px solid red"
}

triTop.addEventListener("click", redBorder)

function opa(){
    const addRed = document.querySelector("#feathers");
    addRed.style.opacity = "0.5"
}

feather.addEventListener("click", opa)

function dinoBack(){
    const background = document.querySelector("#row");
    background.style.backgroundColor = "blue"
}

button.addEventListener("click", dinoBack)


function biggify(){
    const makeBig = document.querySelector("#biggify");
    makeBig.style.width = "200px"
}

biggy.addEventListener("mouseover", biggify)