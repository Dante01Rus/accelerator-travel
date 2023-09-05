const nav = document.querySelector('.nav__list');
const navToggle = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');
const pageMain = document.querySelector('.main');
const pageWrapper = document.querySelector('.wrapper');

nav.classList.remove('nav__list--nojs');
header.classList.remove('header--nojs');

function menuBtnOnclick() {
  if (nav.classList.contains('nav__list--closed')) {
    header.classList.add('header__menu-opened');
    pageMain.classList.add('main__menu-opened');
    pageWrapper.classList.add('modal-open');
    nav.classList.remove('nav__list--closed');
    nav.classList.add('nav__list--opened');
  } else {
    header.classList.remove('header__menu-opened');
    pageMain.classList.remove('main__menu-opened');
    pageWrapper.classList.remove('modal-open');
    nav.classList.add('nav__list--closed');
    nav.classList.remove('nav__list--opened');
  }
}

navToggle.addEventListener('click', menuBtnOnclick);
nav.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('nav__link')) {
    menuBtnOnclick();
  }
});
