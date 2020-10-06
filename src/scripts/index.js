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
	let langSpan = document.querySelector('.lang');

	if (LANGUAGE === 'RU') {
		document.title = 'Даниил Парфенов';
		html.lang = 'ru';
	} else {
		document.title = 'Daniil Parfenov';
		html.lang = 'eu';
	}

	langSpan.childNodes[1].innerText = LANGUAGE;
}

function _bottomScrollBtnHandler() {
	let header = document.querySelector('.header');
	header.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}

if (window) {
	window.onload = function () {
		LANGUAGE = localStorage.getItem('lang') || 'RU';
		_rerenderElementsWithDifferentLang();
		let langEl = document.querySelector('.lang'),
			langListEl = document.querySelector('.lang__list'),
			scrollBtn = document.querySelector('.first-screen__dropdown');
		langEl.addEventListener('click', () => ChangeLangElClass(langEl));
		langListEl.childNodes.forEach((el) => {
			el.addEventListener('click', () => SelectLang(el));
		});
		scrollBtn.addEventListener('click', () => _bottomScrollBtnHandler());

		// let headerEl = document.querySelector('.header')
	};
}
