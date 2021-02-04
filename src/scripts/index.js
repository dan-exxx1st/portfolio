import { navigationHandler } from './navigation';
import { scrollHelper } from './helpers';

import '../styles/index.scss';
let LANGUAGE;

function ChangeLangElClass(el) {
	let elClass = el.className;
	if (el.className.indexOf('select') !== -1) {
		let newClass = elClass.replace(/\w[select]/g, '');
		el.className = newClass;
	} else {
		el.className = `${elClass} select`;
	}
}

function SelectLang(el) {
	let langEl = document.querySelector('.lang');
	let langListEl = document.querySelector('.lang__list');
	langListEl.childNodes.forEach((item) => {
		if (item.className.indexOf('active') !== -1) {
			item.className = item.className.replace(/\w[active]/g, '');
		}
	});
	if (el.innerText !== LANGUAGE) {
		let newLang = el.innerText;
		LANGUAGE = newLang;
		localStorage.setItem('lang', newLang);
		langEl.childNodes[1].innerText = LANGUAGE;
		_rerenderElementsWithDifferentLang();
	}
}

function _rerenderElementsWithDifferentLang() {
	let html = document.querySelector('html');
	let langSpan = document.querySelector('.lang'),
		firstScreenCaption = document.querySelector('.first-screen__caption'),
		firstScreenTitle = document.querySelector('.first-screen__title'),
		navListItems = document.querySelectorAll('.nav__list__item'),
		skillsTitle = document.querySelector('.skills__title'),
		skillsBgTitle = document.querySelector('.skills__bg-title'),
		educationTitle = document.querySelector('.education__title'),
		educationBgTitle = document.querySelector('.education__bg-title'),
		portfolioTitle = document.querySelector('.portfolio__title '),
		portfolioBgTitle = document.querySelector('.portfolio__bg-title');

	if (LANGUAGE === 'RU') {
		document.title = 'Даниил Парфенов';
		html.lang = 'ru';

		firstScreenCaption.textContent =
			'Приветствую. Меня зовут Парфенов Даниил и я';
		firstScreenTitle.textContent = 'начинающий front-end разработчик';

		navListItems[0].textContent = 'Главная страница';
		navListItems[1].textContent = 'Навыки';
		navListItems[2].textContent = 'Образование';
		navListItems[3].textContent = 'Портфолио';
		navListItems[4].textContent = 'Обо мне';
		navListItems[5].textContent = 'Мои контакты';

		skillsTitle.textContent = 'Навыки';
		skillsBgTitle.textContent = 'Навыки';

		educationTitle.textContent = 'Образование';
		educationBgTitle.textContent = 'Образование';

		portfolioTitle.textContent = 'Портфолио';
		portfolioBgTitle.textContent = 'Портфолио';
	} else {
		document.title = 'Daniil Parfenov';
		html.lang = 'eu';

		firstScreenCaption.textContent = `Hello. My name is Dan Parfenov and I'm`;
		firstScreenTitle.textContent = 'junior front-end developer';

		navListItems[0].textContent = 'Main page';
		navListItems[1].textContent = 'Skills';
		navListItems[2].textContent = 'Education';
		navListItems[3].textContent = 'Portfolio';
		navListItems[4].textContent = 'About me';
		navListItems[5].textContent = 'Contacts';

		skillsTitle.textContent = 'Skills';
		skillsBgTitle.textContent = 'Skills';

		educationTitle.textContent = 'Education';
		educationBgTitle.textContent = 'Education';

		portfolioTitle.textContent = 'Portfolio';
		portfolioBgTitle.textContent = 'Portfolio';
	}

	langSpan.childNodes[1].innerText = LANGUAGE;
}

if (window) {
	navigationHandler();
	scrollHelper();
	LANGUAGE = localStorage.getItem('lang') || 'RU';
	_rerenderElementsWithDifferentLang();

	let preloader = document.querySelector('.preloader'),
		content = document.querySelector('.content'),
		langEl = document.querySelector('.lang'),
		langListEl = document.querySelector('.lang__list');

	langEl.addEventListener('click', () => ChangeLangElClass(langEl));
	langListEl.childNodes.forEach((el) => {
		el.addEventListener('click', () => SelectLang(el));
	});
	window.onload = function () {
		let loadTime = 1;

		let timer = setInterval(function () {
			if (loadTime <= 0) {
				clearInterval(timer);
				preloader.style.display = 'none';
				content.style.display = 'flex';
			} else {
				preloader.style.opacity = loadTime;
				loadTime -= 0.02;
			}
		}, 20);
	};
}
