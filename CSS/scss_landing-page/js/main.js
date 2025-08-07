window.addEventListener('scroll', function () {
	if (window.pageYOffset >= 200) {
		document.querySelector('header').classList.add('fixed');
	} else {
		document.querySelector('header').classList.remove('fixed');
	}
});
