import {
	RenderPortfolioCards,
	RenderEducationText,
	RenderAboutMeContent,
} from './views';

export default function () {
	const LANGUAGE = localStorage.getItem('lang') || 'RU';

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
		portfolioBgTitle = document.querySelector('.portfolio__bg-title'),
		aboutMeTitle = document.querySelector('.about-me__title'),
		aboutMeBgTitle = document.querySelector('.about-me__bg-title'),
		contactsTitle = document.querySelector('.contacts__title'),
		contactsBgTitle = document.querySelector('.contacts__bg-title'),
		contactsInfo = document.querySelector('.contacts__content').childNodes;

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

		aboutMeTitle.textContent = 'Обо мне';
		aboutMeBgTitle.textContent = 'Обо мне';

		contactsTitle.textContent = 'Контакты';
		contactsBgTitle.textContent = 'Контакты';

		contactsInfo[1].textContent = 'Мой профиль на Github';
		contactsInfo[2].textContent = 'Мой профиль на Gitlab ';
	} else {
		document.title = 'Daniil Parfenov';
		html.lang = 'en';

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

		aboutMeTitle.textContent = 'About me';
		aboutMeBgTitle.textContent = 'About me';

		contactsTitle.textContent = 'Contacts';
		contactsBgTitle.textContent = 'Contacts';

		contactsInfo[1].textContent = 'My profile on Github';
		contactsInfo[2].textContent = 'My profile on Gitlab';
	}

	RenderPortfolioCards(LANGUAGE);
	RenderEducationText(LANGUAGE);
	RenderAboutMeContent(LANGUAGE);

	langSpan.childNodes[1].innerText = LANGUAGE;
}
