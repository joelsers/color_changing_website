const html = document.querySelector('html');

const h1 = document.querySelectorAll('h1');

const h2 = document.querySelectorAll('h2');

const h3 = document.querySelectorAll('h3');

const para = document.querySelectorAll('p');

const bquote = document.querySelectorAll(
	'blockquote'
);
const ul = document.querySelectorAll('ul');

const ol = document.querySelectorAll('ol');

function rand() {
	return Math.floor(Math.random() * 256);
}
function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${b})`;
}

setInterval(function() {
	for (let h of h3) {
		h.style.color = randomRGB();
		h.classList.toggle('big');
		h.classList.toggle('small');
	}
}, 2000);
setInterval(function() {
	for (let h of h2) {
		h.style.color = randomRGB();
		h.classList.toggle('big');
		h.classList.toggle('small');
	}
}, 500);
setInterval(function() {
	for (let h of h1) {
		h.style.color = randomRGB();

		h.classList.toggle('big');
		h.classList.toggle('small');
	}
}, 900);
setInterval(function() {
	for (let p of para) {
		p.style.color = randomRGB();
		p.classList.toggle('big');
		p.classList.toggle('small');
	}
}, 1750);

setInterval(function() {
	for (let block of bquote) {
		block.style.color = randomRGB();
		block.classList.toggle('big');
		block.classList.toggle('small');
	}
}, 1000);

setInterval(function() {
	for (let o of ol) {
		o.style.color = randomRGB();
		o.classList.toggle('big');
		o.classList.toggle('small');
	}
}, 1400);

setInterval(function() {
	for (let u of ul) {
		u.style.color = randomRGB();
		u.classList.toggle('big');
		u.classList.toggle('small');
	}
}, 500);

setInterval(function() {
	html.style.background = randomRGB();
}, 2000);
