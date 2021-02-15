const AboutMeContent = `
<p class="about-me__content__title">Я <span>Junior fullstack developer</span>, с упором на front-end разработку. </p>
<span class="about-me__content__title">Мои навыки:</span> <br>
<span class="about-me__content__second">Языки программирования: </span>C#, Go, JavaScript (es5+). <br>
<span class="about-me__content__second">JavaScript:</span> <br>
Прототипы, обычные и стрелочные функции, классы, Spread/Rest операторы, Map, Proxy, Promise (resolve, reject, Promise.all), async/await, массивы (concut, slice, splice, map, find, filter, reduce), объекты (assign, in, delete, keys, values, entries) <br>
<span class="about-me__content__second">TypeScript:</span> <br>
Типы данных, интерфейсы, Union, Intersection, Generic типы, перечисления, классы (параметры, методы, свойства, public, private, protected, readonly поля) и наследование. <br>
<span class="about-me__content__second">Front-end:</span> <br>
Базовые: HTML, CSS. <br>
Шаблонизаторы: Pug/Jade, Sass/Scss. <br>
Библиотеки:  React, Redux, Mobx, Mobx-state-tree, Styled-components, Apollo; Vue, Vuex, Vue-apollo; <br>
Для тестов: Enzyme, Jest-styled-components, Vue-test-utils. <br>
<span class="about-me__content__second">Back-end:</span> <br>
Библиотеки: Express, Fastify, Nestjs, TypeORM, Knex, Objection.js. <br>
Базы данных: PostgreSQL, MySQL, Redis. <br>
<span class="about-me__content__second">Тесты:</span> <br>
Подходы: Unit, integration, e2e. <br>
Библиотеки: Jest, ava, mocha, chai, supertest.  <br>
Сборщики: Webpack 4, Webpack 5, Gulp. <br>
<span class="about-me__content__second">CI/CD, развёртывание приложений:</span> <br>
Docker, docker-compose, Github-actions, Gitlab. <br>
<span class="about-me__content__second">Дизайн инструменты: </span> <br>
Adobe Photoshop, Adobe Illustrator, Figma, Zeplin, Avocode. <br>
<span class="about-me__content__second">Другое: </span> <br>
Git, Github, Gitlab, Linux, Bash. 
`;

export default function () {
	const aboutMeContentSection = document.createElement('div');
	aboutMeContentSection.innerHTML = AboutMeContent;
	aboutMeContentSection.className = 'about-me__content';
	const aboutMeSection = document.querySelector('.about-me');
	aboutMeSection.appendChild(aboutMeContentSection);
}
