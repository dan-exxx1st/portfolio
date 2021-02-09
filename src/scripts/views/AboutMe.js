const AboutMeContent = `
Я Junior front-end developer, с 2 летним опытом в JavaScript, TypeScript, React, Redux, Mobx, Vue.
Начал изучение web разработки в начале 2019 года. Первой задачей стал курсовой проект в колледже на 3-м курсе, который заключался в создании online-библиотеки. Курсовой проект был реализовал на JavaScript, React.js и Express.js.
Так же в колледже я написал дипломную работу, которая заключалась в создании web-чата и была реализована с использованием тех же технологий, к которым добавился Redux и Socket.IO. По мимо выше перечисленных работ, на данный момент я так же реализовал:
1) Продвинутый todo-list на Vue.js и Fastify.js;
2) Интернет-магазин пиццы на TypeScript, React, Mobx.
В данный момент разрабатываю web-chat на TypeScript, React, Graphql, Apollo и Nest.js.
Так же, кроме технологий front-end разработки, изучал разработку программного обеспечения под OC Windows, с помощью ASP.NET и C#. Работаю на OC Linux. Дистрибутив – Arch Linux, графическая оболочка – Gnome 3.
Личностные качества – усидчив, стресс устойчив, быстро обучаюсь новому материалу. Владею английским языком на базовом уровне.
`;

export default function () {
	const aboutMeContentSection = document.createElement('div');
	aboutMeContentSection.innerText = AboutMeContent;
	aboutMeContentSection.className = 'about-me__content';
	const aboutMeSection = document.querySelector('.about-me');
	aboutMeSection.appendChild(aboutMeContentSection);
}
