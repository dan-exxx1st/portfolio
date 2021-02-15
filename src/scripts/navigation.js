import { scrollIntoViewHandler } from './helpers';

export function navigationHandler() {
	let nav = document.querySelector('.nav__list');

	let firstScreen = document.querySelector('.first-screen'),
		skills = document.querySelector('.skills__title'),
		education = document.querySelector('.education'),
		portfolio = document.querySelector('.portfolio'),
		aboutMe = document.querySelector('.about-me'),
		contacts = document.querySelector('.contacts');

	nav.childNodes[0].addEventListener('click', () =>
		scrollIntoViewHandler(firstScreen)
	);

	nav.childNodes[1].addEventListener('click', () =>
		scrollIntoViewHandler(skills)
	);

	nav.childNodes[2].addEventListener('click', () =>
		scrollIntoViewHandler(education)
	);

	nav.childNodes[3].addEventListener('click', () =>
		scrollIntoViewHandler(portfolio)
	);

	nav.childNodes[4].addEventListener('click', () =>
		scrollIntoViewHandler(aboutMe)
	);

	nav.childNodes[5].addEventListener('click', () =>
		scrollIntoViewHandler(contacts)
	);
}
