import './styles.css';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createAboutPage from './about.js';

const content = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', createHomePage);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', switchPage);
});

function switchPage(e) {
  const page = e.currentTarget.getAttribute("value");
  clearContent();
  if (page === 'home') {
    createHomePage();
  } else if (page === 'menu') {
    createMenuPage();
  } else if (page === 'about') {
    createAboutPage();
  }
}

function clearContent() {
  content.firstElementChild.remove();
}