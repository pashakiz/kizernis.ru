import { Modal } from 'bootstrap';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
import '@scss/main.scss'

//preloader
const preloader = () => {
  setTimeout(function () {
    let preloader = document.body.querySelector('#page-preloader');
    if (!preloader)
      return false
    if (!preloader.classList.contains('done'))
      preloader.classList.add('done');
  }, 1000);
}
document.addEventListener('DOMContentLoaded', preloader, false);

//header random users
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
const count = 5;
let selections = document.body.querySelectorAll('.choose');
selections[getRandomInt(count) - 1].style.display = 'flex';

//form
const form = document.querySelector('.form');
const formBtn = document.querySelector('.form__btn');
const formInput = document.querySelector('.form input.form-control');
const messageTrue = document.querySelector('.form .form__response.form__response_true');
const messageFalse = document.querySelector('.form .form__response.form__response_false');

const formValidate = () => {
  let error = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (formInput.value == '')
    error = true;

  if (!emailRegex.test(formInput.value))
    error = true;

  if (error) {
    messageTrue.style.display = 'none';
    messageFalse.style.display = 'block';
    formInput.classList.add('form-control_error');
    return false
  }

  formSend();
}
const formSend = () => {
  console.log('formSend');
  formInput.classList.remove('form-control_error');
  messageFalse.style.display = 'none';
  messageTrue.style.display = 'block';
}

if (!!form)
  formBtn.addEventListener('click', formValidate, false);

//open all (links)
const moreLinksBtn = document.querySelector('.category__btn');
const showMoreLinks = (e) => {
  const hiddenLinks = document.querySelectorAll('.category__hide');
  hiddenLinks.forEach(links => links.classList.remove('d-none', 'd-xl-block'));
  e.target.style.display = 'none';
}
moreLinksBtn.addEventListener('click', showMoreLinks, false);

// Splidejs (cursor customisation)
const splides = document.querySelectorAll('.splide');

const splideIsDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.add('is-grab');
}

const splideIsntDrag = (e) => {
  if (e.target.closest('.splide') === null)
    return false
  e.target.closest('.splide').classList.remove('is-grab');
}

if (!!splides) {
  splides.forEach(el => el.addEventListener('mousedown', splideIsDrag, false));
  splides.forEach(el => el.addEventListener('mouseup', splideIsntDrag, false));
}

// Splidejs
// https://github.com/Splidejs/splide

if (document.querySelector('.splide_vitems') !== null) {
  new Splide( '.splide_vitems', {
    type       : 'loop',
    arrows     : false,
    //arrowPath  : 'M0,0H40V40H0Z',
    autoHeight : true,
    autoWidth  : true,
    perPage    : 1,
    gap        : '18px',
    //fixedWidth : '525px',
    mediaQuery : 'min',
    breakpoints: {
      992: {
        gap    : '18px',
      },
      1200: {
        gap        : '20px',
      },
      1400: {
        gap        : '47px',
      },
    },
  } ).mount();
}
