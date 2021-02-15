function RenderEducationText(lang) {
	const educationDates = document.querySelector('.education__content__date')
		.childNodes;
	const educationText = document.querySelector('.education__content__text')
		.childNodes;
	switch (lang) {
		case 'RU': {
			educationDates[0].innerText = 'Июнь 2020';
			educationDates[1].innerText = 'Август 2020';
			educationText[0].innerText =
				'Закончил колледж по специальности «Прикладная информатика».';
			educationText[1].innerText =
				'Поступил в НИУ МЭИ на заочное отделение по специальности «Информатика и вычислительная техника».';
			break;
		}

		case 'EN': {
			educationDates[0].innerText = 'June 2020';
			educationDates[1].innerText = 'August 2020';
			educationText[0].innerText =
				'Graduated from college with a degree in Applied Informatics.';
			educationText[1].innerText =
				'I entered the NRU MPEI, the correspondence department with a degree in Informatics and Computer Engineering.';
			break;
		}
	}
}

export default RenderEducationText;
