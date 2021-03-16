const heading = document.querySelector("h1");

function makeBold() {
	heading.style.fontWeight = 600;
}

heading.addEventListener("click", makeBold);
