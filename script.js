const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

const hightlightmenu =()=> {
	const elem = document.querySelector(".highlight")
	const homemenu = document.querySelector("#home-page")
	const aboutmenu = document.querySelector("#about-page")
	const servicesmenu = document.querySelector("#services-page")
	const signup = document.querySelector("#signup-page")
	let scroll = window.scrollY
	// console.log(scroll);

	if (window.innerWidth > 960 && scroll < 770) {
		homemenu.classList.add('highlight')
		aboutmenu.classList.remove('highlight')
		return;
	} else if (window.innerWidth>960 && scroll <1400) {
		homemenu.classList.remove('highlight')
		aboutmenu.classList.add('highlight')
		servicesmenu.classList.remove('highlight')
		return;
	}  else if (window.innerWidth>960 && scroll <2345) {
		homemenu.classList.remove('highlight')
		aboutmenu.classList.remove('highlight')
		servicesmenu.classList.add('highlight')
		return;
}

if ((elem && window.innerWidth < 960 && scroll < 600) || elem) {
	elem.classList.remove('highlight');
}}

window.addEventListener('scroll',hightlightmenu)
window.addEventListener('click',hightlightmenu)

const hidemobilemenu = () => {
	const menubar = document.querySelector('.is-active');
	if (window.innerWidth <=750 && menubar) {
		menu.classList.toggle('is-active');
		menuLinks.classList.remove('active');
	}
};


menuLinks.addEventListener('click',hidemobilemenu);
navlogo.addEventListener('click',hidemobilemenu);

