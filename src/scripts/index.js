import { navigationHandler } from './navigation';
import { scrollHelper } from './helpers';
import RerenderWithDeffirentLang from './lang';

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
		RerenderWithDeffirentLang();
	}
}

if (window) {
	navigationHandler();
	scrollHelper();
	LANGUAGE = localStorage.getItem('lang') || 'RU';
	RerenderWithDeffirentLang();

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
