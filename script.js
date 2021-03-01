'use strict';
const body = document.querySelector('body')
const input = document.querySelector('.guess');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score')
const highScoreDom = document.querySelector('.highscore')
const again = document.querySelector('.again')

let scoreCode = 10
let highScore = 0

//Define The Random Number
let randomNumber = Math.trunc(Math.random() * 20) + 1; //generating Random Number
//magic happens When you click Check Button
check.addEventListener('click', () => {
	let inputValue = Number(input.value); //Converting String Value to Number From Input Field
	input.value = ''; //Resetting The Value
	message.textContent = `Start guessing...`

	//When the input field is sempty
	if (!inputValue) {
		message.textContent = `⚠ Please Enter a Number`
	}
	//When Player Wins
	else if (inputValue === randomNumber) {
		message.textContent = `🎉 Your Guess Is Correct`
		number.style.width = `30rem`
		body.style.backgroundColor = '#60b347'
		number.textContent = randomNumber;
		if (scoreCode > highScore) {
			highScore = scoreCode
			highScoreDom.textContent = highScore * 10
		}
	}
	//When Guess is Wrong
	else if (inputValue !== randomNumber) {
		if (scoreCode > 1) {
			message.textContent = inputValue > randomNumber ? '📈 Guess is Too High' : '📉 Guess is Too Low';
			scoreCode--;
			score.textContent = scoreCode;
		}
		else {
			message.textContent = `👎 You are A Noob`
			score.textContent = 0
			body.style.backgroundColor = 'rgb(184, 12, 40)'
		}
	}
})

//Reset The Values to paly The Game Again
again.addEventListener('click', () => {
	randomNumber = Math.trunc(Math.random() * 20) + 1; //Regenerating Random Number
	body.style.backgroundColor = '#222'
	number.style.width = `15rem`
	number.textContent = '?';
	scoreCode = 10
	score.textContent = scoreCode;
	message.textContent = `Start guessing...`
})