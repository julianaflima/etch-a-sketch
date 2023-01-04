let gridSide = 4; //'';
const drawSpace = document.querySelector('#draw-space');

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

const squares = document.querySelectorAll('.inside-square')

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

function changeColor(e) {
	e.target.style.backgroundColor = 'red';
}

function stop(e) {
	squares.forEach(square => {
		square.removeEventListener('mouseover', changeColor);
	});
}


