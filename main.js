const heading = document.querySelector("h1");
const messWithMeMore = document.querySelector(".mess-with-me-more");
const messWithMe = document.querySelector(".mess-with-me");
const hideMe = document.querySelector("#hide-me");
const triTop = document.querySelector("#triceratops");
const button = document.querySelector("#toggle")
const spanny = document.querySelector("span")

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

messWithMe.addEventListener("onclick", makeOrange);

// function fontColor(){
//     const orangeFont =document.querySelector('.mess-with-me');
//     orangeFont.style.color = "orange";
// }
// msmbg.addEventListener('click',fontColor);