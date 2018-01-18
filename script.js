// Etch-A-Sketch project script
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = "container";
body.appendChild(container);
for(let i = 0; i < 16 * 16; i++) {
	const div = document.createElement('div');
	div.classList.add('square');
	container.appendChild(div);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
	square.setAttribute("style", "width: 80px; height: 80px");
});

squares.forEach((square) => {
	square.addEventListener("mouseover", changeColor);
});

function changeColor(e) {
	e.target.setAttribute('style', 'background: blue;' + ' width: ' + width + 'px; height: ' + height);
}

const btn = document.querySelector('button');

btn.addEventListener("click", clearGrid);

function clearGrid(e) {
	squares.forEach((square) => {
		square.style.removeProperty("background");
	});

	let gridSquares = prompt("How many squares per side do you want for the new grid?");
	let width = 960/gridSquares;
	let height = 960/gridSquares;

	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	for(let i = 0; i < gridSquares * gridSquares; i++) {
		const div = document.createElement('div');
		console.log(div);
		div.classList.add('square');
		container.appendChild(div);
	}

	const newSquares = document.querySelectorAll('.square');

	newSquares.forEach(square => {
		square.setAttribute("style", "width: " + width + "px; height: " + height + "px");
	});

	newSquares.forEach((square) => {
		square.addEventListener("mouseover", changeColor);
	});
}