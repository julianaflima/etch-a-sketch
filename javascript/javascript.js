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
	newSquare.dataset.darken = 0;
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
		(e) => {
			chosenColor = `${e.target.textContent.toLowerCase()}`
			console.log('Button: '+e.target.textContent);
		});
});

//Change color when square is clicked or over with click
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

	switch (chosenColor) {
		case 'rainbow':
			e.target.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
			break;

		case 'red':
		case 'blue':
			e.target.style.backgroundColor = `${chosenColor}`;
			break;
		case 'eraser':
			e.target.style.backgroundColor = `rgb(255, 255, 255)`;
			break;
		case 'shade':
			darkenColor(e);
			console.log(`it's shade time!`);
			break;
		default:
			e.target.className = 'inside-square';
			break;
	}
}


// Shade
function darkenColor(e) {
	const cell = e.target;
	let oldColor = window.getComputedStyle(e.target).getPropertyValue('background-color');
	let colorValues = oldColor.slice(4, -1).split(',')
	let counter = +cell.dataset.darken;

	if (counter === 0) {
		// Calculate index to adjust each round and save as data-value inline for future use
		cell.dataset.indexR = Math.ceil(+colorValues[0] / 10);
		cell.dataset.indexG = Math.ceil(+colorValues[1] / 10);
		cell.dataset.indexB = Math.ceil(+colorValues[2] / 10);
	}

	if (counter < 10) {
		// Update color 10x
		let newColorR = +colorValues[0] - +cell.dataset.indexR;
		let newColorG = colorValues[1] - cell.dataset.indexG;
		let newColorB = ((colorValues[2] * 10) - (cell.dataset.indexB * 10)) / 10;

		cell.style.backgroundColor = `rgb(${newColorR}, ${newColorG}, ${newColorB})`;

		// Update counter
		++counter;
		cell.dataset.darken = counter;
	}
}










