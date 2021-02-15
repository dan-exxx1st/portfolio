import { AboutMeContentRu, AboutMeContentEu } from '../data';

export default function (lang) {
	const oldContent = document.querySelector('.about-me__content');

	const abouteMeContent = lang === 'RU' ? AboutMeContentRu : AboutMeContentEu;
	const aboutMeContentSection = document.createElement('div');
	aboutMeContentSection.innerHTML = abouteMeContent;
	aboutMeContentSection.className = 'about-me__content';
	const aboutMeSection = document.querySelector('.about-me');

	if (oldContent) {
		aboutMeSection.removeChild(oldContent);
	}

	aboutMeSection.appendChild(aboutMeContentSection);
}
