import '@scss/main.scss'

const enableStylesheet = (node) => node.disabled = false;
const disableStylesheet = (node) => node.disabled = true;

let themelight = document.getElementById('themelight');
let customlight = document.getElementById('customlight');
let themedark = document.getElementById('themedark');
let customdark = document.getElementById('customdark');
let themeSwitchIcon = document.querySelector('.cssmode__icon');
let themeSwitchIconSun = themeSwitchIcon.querySelector('.icon-sun');
let themeSwitchIconMoon = themeSwitchIcon.querySelector('.icon-moon');
let userTheme = localStorage.getItem('userTheme');

const turnLightTheme = () => {
  document.querySelector('html').classList.remove('themedark');
  document.querySelector('html').classList.add('themelight');
  themeSwitchIconSun.style.display = 'none';
  themeSwitchIconMoon.style.display = 'inline';
  disableStylesheet(themedark);
  disableStylesheet(customdark);
  enableStylesheet(themelight);
  enableStylesheet(customlight);
  localStorage.setItem('userTheme', 'light');
}

const turnDarkTheme = () => {
  document.querySelector('html').classList.remove('themelight');
  document.querySelector('html').classList.add('themedark');
  themeSwitchIconSun.style.display = 'inline';
  themeSwitchIconMoon.style.display = 'none';
  disableStylesheet(themelight);
  disableStylesheet(customlight);
  enableStylesheet(themedark);
  enableStylesheet(customdark);
  localStorage.setItem('userTheme', 'dark');
}

if (userTheme) {
  if (userTheme == 'dark')
    turnDarkTheme();
  if (userTheme == 'light')
    turnLightTheme();
} else {
  if (document.querySelector('html').classList.contains('themedark'))
    turnDarkTheme();
  if (document.querySelector('html').classList.contains('themelight'))
    turnLightTheme();
}

const themeSwitch = (e) => {
  if (document.querySelector('html').classList.contains('themedark'))
    turnLightTheme();
  else
    turnDarkTheme();
}

themeSwitchIcon.addEventListener('click', themeSwitch, false);
