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
	square.addEventListener("mouseover", changeColor);
});

function changeColor(e) {
	e.target.setAttribute('style', 'background: blue');
}

const btn = document.querySelector('button');

btn.addEventListener("click", clearGrid);

function clearGrid(e) {
	squares.forEach((square) => {
		square.style.removeProperty("background");
	});

	let gridSquares = prompt("How many squares per side do you want for the new grid?");
	let width = (100 / gridSquares);
	let height = (100 / gridSquares);

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

	newSquares.forEach((square) => {
		square.addEventListener("mouseover", changeColor);
	});
}