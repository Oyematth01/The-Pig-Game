'use strict';

// Selecting Element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
	// 1. Generating a random dice
	const dice = Math.trunc(Math.random() * 6) + 1;

	// 2. Display dice
	diceEl.classList.remove('hidden');
	diceEl.src = `dice-${dice}.png`;

	// 3. Check for rolled number: if 1, switch to  next player and if not a 1, add to the current score
	if (dice != 1) {
		currentScore += dice;
		current0El.textContent = currentScore;
	}
	else {
		current0El.textContent = 0;
	}
})