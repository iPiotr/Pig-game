'use strict';

//Select
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0')
const currentPlayer2 = document.querySelector('#current--1')

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Start conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

//Rolling dice
btnRoll.addEventListener('click', () => {

    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    if (dice !== 1) {
        
        currentScore += diceNumber;
        currentPlayer1.textContent = currentScore;

    } else {



    }
});