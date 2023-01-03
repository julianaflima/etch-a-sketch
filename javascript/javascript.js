const gridSide = 5;
const drawSpace = document.querySelector('.draw-space');

function createGrid(gridSide) {
	let gridNumber = gridSide * gridSide;
	let side = (500 - (gridSide + 1)) / gridSide;

	for(let i = 0; i < gridNumber; i++){
		
	const newSquare = document.createElement('div');
	newSquare.className = 'inside-square';
	newSquare.style.height = `${side}px`;
	newSquare.style.width = `${side}px`;
	drawSpace.appendChild(newSquare);
	}
}

createGrid(gridSide);
