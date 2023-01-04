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
	newSquare.className = 'inside-square';
	newSquare.style.height = `${side}px`;
	newSquare.style.width = `${side}px`;
	drawSpace.appendChild(newSquare);
	}
}

createGrid(gridSide);

// This const can't come before createGrid because there aren't divs with the inside-square class before the grid is created
const squares = document.querySelectorAll('.inside-square')

// Choose color
let chosenColor = '';
colorButtons.forEach(colorButton => {
	colorButton.addEventListener('mousedown',
		(e) => chosenColor = `${e.target.textContent.toLowerCase()}`);
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

function stop(e) {
	squares.forEach(square => {
		square.removeEventListener('mouseover', changeColor);
	});
}

// Change background to the chosen color
function changeColor(e) {	
	let classesOn = e.target.classList

	switch (chosenColor) {
		case 'rainbow':
			e.target.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
			break;

		case 'red':
		case 'blue':
			e.target.style.backgroundColor = `${chosenColor}`;
			break;
		case 'eraser':
			e.target.style.backgroundColor = `white`;
			break;
		default:
			e.target.className = 'inside-square';
			break;
	}
}




