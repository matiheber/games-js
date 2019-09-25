var userScoreTag = document.querySelector('#userScore');
var pcScoreTag = document.querySelector('#pcScore');
var gameCaption = document.querySelector('.game-caption');
var btnRock = document.querySelector('#rock');
var btnPaper = document.querySelector('#paper');
var btnScissors = document.querySelector('#scissors');
var overlay = document.querySelector('.overlay');
var btnReset = document.querySelector('.btn-reset');
var userScore = 0;
var pcScore = 0;

function pcChoice () {
	var options = ['r', 'p', 's'];
	var randomNumber = Math.floor(Math.random() * 3);
	return options[randomNumber];
}

function switchWord (letter) {
	if (letter === 'r') {
		return 'Rock';
	}
	if (letter === 's') {
		return 'Scissors';
	}
	if (letter === 'p') {
		return 'Paper';
	}
}

function addRemoveClass (className, btn) {
	btn.classList.add(className);

	setTimeout(() => {
		btn.classList.remove(className);
	}, 1500);
}

function endGame () {
	if (userScore === 10 || pcScore === 10) {
		overlay.setAttribute('style', 'display: flex;');
		if (userScore > pcScore) {
			overlay.querySelector('p').innerText = 'Fin del juego. ¡Ganó el usuario! 😄';
		} else {
			overlay.querySelector('p').innerText = 'Fin del juego. ¡Ganó la pc! 😢';
		}
	}
}


function draw (userChoice, pcChoice, btn) {
	var userChoiceText = switchWord(userChoice);
	var pcChoiceText = switchWord(pcChoice);

	gameCaption.innerText = 'User: ' + userChoiceText + ' -  PC: ' + pcChoiceText + '. Is a draw! 😯';

	addRemoveClass('draw', btn);
}

function win (userChoice, pcChoice, btn) {
	var userChoiceText = switchWord(userChoice);
	var pcChoiceText = switchWord(pcChoice);

	userScore++;
	userScoreTag.innerText = userScore;
	gameCaption.innerText = 'User: ' + userChoiceText + ' -  PC: ' + pcChoiceText + '. User wins! 😄';
	
	addRemoveClass('win', btn);

	endGame();
}

function lose (userChoice, pcChoice, btn) {
	var userChoiceText = switchWord(userChoice);
	var pcChoiceText = switchWord(pcChoice);

	pcScore++;
	pcScoreTag.innerText = pcScore;
	gameCaption.innerText = 'User: ' + userChoiceText + ' -  PC: ' + pcChoiceText + '. PC wins! 😢';

	addRemoveClass('lose', btn);

	endGame();
}

function game (userChoice, btn) {
	var pcChoiceResult = pcChoice();
	var shot = userChoice + pcChoiceResult;
	console.log('Usuario:', userChoice);
	console.log('PC:', pcChoiceResult);
	console.log(shot);

	switch (shot) {
		case 'rr':
		case 'pp':
		case 'ss':
			// console.log('Es un empate');
			draw(userChoice, pcChoiceResult, btn);
			break;
		case 'rs':
		case 'pr':
		case 'sp':
			// console.log('Gana usuario');
			win(userChoice, pcChoiceResult, btn);
			break;
		case 'ps':
		case 'rp':
		case 'sr':
			// console.log('Gana máquina');
			lose(userChoice, pcChoiceResult, btn);
			break;
	}

	// rr -> empate
	// pp -> empate
	// ss -> empate

	// rs -> gana usuario
	// pr -> gana usuario
	// sp -> gana usuario

	// ps -> gana máquina
	// rp -> gana máquina
	// sr -> gana máquina
}

btnRock.addEventListener('click', () => {
	var btn = btnRock;
	game('r', btn);
});

btnPaper.addEventListener('click', () => {
	var btn = btnPaper;
	game('p', btn);
});

btnScissors.addEventListener('click', () => {
	var btn = btnScissors;
	game('s', btn);
});

btnReset.addEventListener('click', () => {
	userScore = 0;
	pcScore = 0;
	userScoreTag.innerText = userScore;
	pcScoreTag.innerText = pcScore;
	overlay.setAttribute('style', 'display: none');
	gameCaption.innerText = 'Waiting for your move!';
});

// Paso a paso del juego
/*
	1. Capturar todos los elementos que necesito del HTML.
	2. Definir los eventos necesarios. (Ej: click, mouseover, mousemove)
	3. Estructurar la lógica del juego.
		- función que estructura los diferentes casos de resultado.
		- funciones adicionales:
			- elección random de la PC.
			- funciones de win, lose, draw:
				- Cada función define algo que sucede en el HTML.
*/
