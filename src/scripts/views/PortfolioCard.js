import { CardsDataRu, CardsDataEu } from '../data';

const PortfolioCard = (opts) => {
	const lang = localStorage.getItem('lang') || 'RU';
	return ` <div class="portfolio__card">
        <h4 class="portfolio__card__title">${opts.title}</h4>
        <span class="portfolio__card__description">${opts.description}</span>
		<div class="portfolio__card__links">
			<a href="${opts.repoLink}" target="_blank" rel="noopener noreferrer">${
		lang === 'RU' ? 'Ссылка на репозиторий.' : 'Link to repository.'
	}</a>
        	<a href="${opts.appLink}" target="_blank" rel="noopener noreferrer">${
		lang === 'RU' ? 'Ссылка на репозиторий.' : 'Link to application.'
	}</a>
		</div>
    </div> `;
};

export default function RenderPortfolioCards(lang) {
	const CardsData = lang === 'RU' ? CardsDataRu : CardsDataEu;
	const Cards = CardsData.map(PortfolioCard);
	const portfolioSectionCards = document.querySelector('.portfolio__list');
	portfolioSectionCards.innerHTML = '';
	portfolioSectionCards.insertAdjacentHTML('afterbegin', Cards);
}
