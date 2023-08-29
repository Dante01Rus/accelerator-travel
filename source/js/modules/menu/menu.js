const nav = document.querySelector('.nav__list');
const navToggle = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');

nav.classList.remove('nav__list--nojs');
header.classList.remove('header--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav__list--closed')) {
    header.classList.add('header__menu-opened');
    nav.classList.remove('nav__list--closed');
    nav.classList.add('nav__list--opened');
  } else {
    header.classList.remove('header__menu-opened');
    nav.classList.add('nav__list--closed');
    nav.classList.remove('nav__list--opened');
  }
});
