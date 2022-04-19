window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

alert("Hi, if you are seeing this alert, its means that "
	+ "this portfolio is still being updated. "
	+ "All of the text and figures are only placeholders.");
