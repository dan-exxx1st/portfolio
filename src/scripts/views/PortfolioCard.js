const CartsData = [
	{
		title: 'Reaql-frontend',
		description: `Reaql-frontend - это front-end приложение написанное на следующем стеке технологий: Typescript, React v16, Graphql, Apollo client v3 и Styled components.<br> 
        Приложение тестируется unit-тестами с применением следующих технологий и библиотек: Jest, Enzyme, Jest-styled-components, @apollo/client/testing. Graphql запросы подменяются с помощью утилиты ApolloMockProvider, поставляемой с пакетом @apollo/client.<br>
		У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается тестирование и при его удачном завершении, приложение собирается и отправляется на хостинг heroku.<br>
		`,
		repoLink: 'https://github.com/dan-exxx1st/reaql-frontend',
		appLink: 'https://reaql-frontend.herokuapp.com/',
	},
	{
		title: 'Reaql-backend',
		description: `Reaql-backend - back-end приложение написанное на следующем стеке технологий: Typescript, Nestjs, Typeorm, PostgreSQL, Redis. <br>
		Приложение написано с использованием микросервисного подхода. Общение между сервисам происходит через Redis. <br>
		Оно тестируется unit-тестами с применением следующих технологий и библиотек: Jest, @nestjs/testing. Запросы к базе данных подменяются с помощью инструментов встроенных в пакет @nestjs/testing и jest.<br>
        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается тестирование и при его удачном завершении, приложение собирается и отправляется на хостинг heroku.<br>
		`,
		repoLink: 'https://github.com/dan-exxx1st/reaql-backend',
		appLink: 'https://reaql-backend.herokuapp.com/',
	},
	{
		title: 'Vudo-frontend',
		description: `Vudo-frontend - это front-end приложение написанное на следующем стеке технологий: Vuejs, Vuex, Scss.<br> 
		У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается сборка и отправка приложения на хостинг heroku.<br>
		`,
		repoLink: 'https://github.com/dan-exxx1st/vudo-frontend',
		appLink: 'https://vudo-frontend.herokuapp.com/',
	},
	{
		title: 'Vudo-backend',
		description: `Vudo-backend - back-end приложение написанное на следующем стеке технологий: TypeScript, Fastify.js, Objection.js. <br>
		Оно тестируется e2e-тестами с применением следующих технологий и библиотек: Jest, Supertest.<br>
        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается сборка и отправка приложения на хостинг heroku.<br>
		`,
		repoLink: 'https://github.com/dan-exxx1st/vudo-backend',
		appLink: 'https://vudo-backend.herokuapp.com/',
	},
	{
		title: 'React-pizza',
		description: `React-pizza - front-end приложение написанное на следующем стеке технологий: TypeScript, React, Mobx. <br>
        У приложения есть репозиторий на github. При отправке изменений в основную ветку репозитория, автоматически запускается сборка и отправка приложения на хостинг heroku.<br>
		`,
		repoLink: 'https://github.com/dan-exxx1st/react-pizza',
		appLink: 'https://exxx1st-react-pizza.herokuapp.com/',
	},
];

const PortfolioCard = (opts) => {
	return ` <div class="portfolio__card">
        <h4 class="portfolio__card__title">${opts.title}</h4>
        <span class="portfolio__card__description">${opts.description}</span>
		<div class="portfolio__card__links">
			<a href="${opts.repoLink}" target="_blank" rel="noopener noreferrer">Ссылка на репозиторий.</a>
        	<a href="${opts.appLink}" target="_blank" rel="noopener noreferrer">Ссылка на приложение.</a>
		</div>
    </div> `;
};

const Cards = CartsData.map((card) => PortfolioCard(card));

export default function RenderPortfolioCards() {
	const portfolioSectionCards = document.querySelector('.portfolio__list');
	portfolioSectionCards.insertAdjacentHTML('afterbegin', Cards);
}
