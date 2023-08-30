'use strict'

const RATING_SCREEN = document.querySelector('.choose-rating-container')
const THANK_YOU_SCREEN = document.querySelector('.rating-result-container')
const RATING_BUTTONS = document.querySelectorAll('.rating-btn')
const SUBMIT_BTN = document.querySelector('.submit-btn')

let RATING_NUM = 0

RATING_BUTTONS.forEach((button) => {
	button.addEventListener('click', () => {
		RATING_BUTTONS.forEach((btn) => btn.classList.remove('clicked'))
		button.classList.add('clicked')
	})
})

SUBMIT_BTN.addEventListener('click', () => {
	RATING_SCREEN.style.display = 'none'
	getRating()
	THANK_YOU_SCREEN.style.display = 'flex'
})

function getRating() {
	const EL_BTN = document.querySelector('.clicked')
	RATING_NUM = EL_BTN.innerText
	setRating()
}

function setRating() {
	const EL_RATING = document.querySelector('.rating-result span')
	EL_RATING.innerText = RATING_NUM
}
