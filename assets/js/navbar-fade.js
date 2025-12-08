let lastScrollY = 0;

window.addEventListener('scroll', function() {
	const navbar = document.querySelector('nav.navbar');
	const currentScrollY = window.scrollY;
	const maxScroll = 500;
	
	// Always show at top
	if (currentScrollY === 0) {
		navbar.style.opacity = 1;
	} else if (currentScrollY < lastScrollY) {
		// Scrolling up - fade in
		const opacity = Math.min(1, 0 + (currentScrollY / maxScroll) * 0.7);
		navbar.style.opacity = opacity;
	} else {
		// Scrolling down - fade out
		const opacity = Math.max(0, 1 - (currentScrollY / maxScroll));
		navbar.style.opacity = opacity;
	}
	
	lastScrollY = currentScrollY;
});

