let gridSide = 4; //'';
const drawSpace = document.querySelector('#draw-space');
const colorButtons = document.querySelectorAll('button');


// do {
// 	gridSide = +prompt('Choose a number between 1 and 100:');
// } while (gridSide > 100 || gridSide < 1) 

function createGrid(gridSide) {
	let gridNumber = gridSide * gridSide;
	let side = 500 / gridSide;

	for(let i = 0; i < gridNumber; i++){
		
	const newSquare = document.createElement('div');
	newSquare.className = 'inside-square-eraser';
	newSquare.style.height = `${side}px`;
	newSquare.style.width = `${side}px`;
	drawSpace.appendChild(newSquare);
	}
}

createGrid(gridSide);

// This const can't come before createGrid because there aren't divs with the inside-square-default class before the grid is created
const squares = document.querySelectorAll('.inside-square-eraser')

// Choose color
let chosenColor = '';
colorButtons.forEach(colorButton => {
	colorButton.addEventListener('mousedown',
		(e) => {
			chosenColor = `${e.target.textContent.toLowerCase()}`;
			console.log(chosenColor);

		});
});

// Change color when square is clicked or over with click
squares.forEach(square => {
	square.addEventListener('mousedown', clickNDrag);
});

function clickNDrag(e) {
	changeColor(e);
	squares.forEach(square => {
		square.addEventListener('mouseover', changeColor);
	});
	squares.forEach(square => {
		square.addEventListener('mouseup', stop);
	});
}

// Which color depends on which button clicked
function changeColor(e) {
	// e.target.style.backgroundColor = `${chosenColor}`;
	
	let classesOn = e.target.classList
	console.log(classesOn);
	classesOn.forEach(classOn => e.target.classList.toggle(`${classOn}`));
	e.target.classList.toggle(`inside-square-${chosenColor}`);
	console.log(classesOn);

}

function stop(e) {
	squares.forEach(square => {
		square.removeEventListener('mouseover', changeColor);
	});
}


