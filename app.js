// select all inputs
const form = document.querySelector("#logoForm");
const brandInput = document.querySelector("input[name='brandname']");
const colorInput = document.querySelector("input[name='color']");
const fontSizeInput = document.querySelector("input[name='fontSize']");
const result = document.querySelector("#results");

// function to make a logo
function makeLogo(text, color, size) {
	// create an empty h2
	const logo = document.createElement("h2");
	// set the text of the h2
	logo.textContent = text;
	// set the color of the h2
	logo.style.color = color;
	// set the font size of the h2
	logo.style.fontSize = `${size}px`;
	// return the h2
	return logo;
}

// event listener
form.addEventListener("submit", function (e) {
	// This is to stop the page from automatically reloading
	e.preventDefault();
	// call the make logo function and store it in a variable
	const newLogo = makeLogo(
		brandInput.value,
		colorInput.value,
		fontSizeInput.value
	);
	// append the variable to the section
	result.appendChild(newLogo);
	// clear the brand name input by setting the value to an empty string
});
