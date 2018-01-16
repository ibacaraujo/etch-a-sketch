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

for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('mouseover', changeColor);
}

function changeColor(e) {
	e.target.style.background = blue;
}