export function scrollIntoViewHandler(domEl) {
	domEl.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}

export function scrollHelper() {
	let header = document.querySelector('.header'),
		scrollBtn = document.querySelector('.first-screen__dropdown'),
		toTopArrow = document.querySelector('.to-top-arrow');
	scrollBtn.addEventListener('click', () => scrollIntoViewHandler(header));

	toTopArrow.addEventListener('click', () => scrollIntoViewHandler(header));

	window.onscroll = () => {
		if (window.scrollY >= window.innerHeight + 50) {
			toTopArrow.style.display = 'block';
		} else {
			toTopArrow.style.display = 'none';
		}
	};
}
