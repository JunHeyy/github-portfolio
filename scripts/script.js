/* navbar rolling cube */
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

/* rubiks cube model */
const rubiks = document.querySelector('#rubiks');
rubiks.addEventListener('load', () => {
	rubiks.play({pingpong: true});
});

/* reveal on scroll */
window.addEventListener('scroll', ()=> {
	let reveals = document.querySelectorAll('.reveal');
	for (e of reveals) {
		let windowHeight = window.innerHeight;
		let revealTop = e.getBoundingClientRect().top;
		let revealPoint = 120;
		if (revealTop < windowHeight - revealPoint) {
			e.classList.add("show");
		}
	}
});
