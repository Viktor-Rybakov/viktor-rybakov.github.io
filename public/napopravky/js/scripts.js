'use strict';

const MODAL = document.querySelector('.js-modal');
const HEADER = document.querySelector('.js-modal__header');
const BODY = document.querySelector('body');
const DIALOG = document.querySelector('.js-modal__section');
const OPEN_BUTTON = document.querySelector('.js-user-info__button');
const CLOSE_BUTTON = document.querySelector('.js-modal__close-button');
const TMPL = document.querySelector('#template');
const CHRONIC_LIST = document.querySelector('.js-form__chronic-list');
const CHRONIC_INPUT = document.querySelector('.js-form__chronic-input');
const CHRONIC_ITEM = TMPL.content.querySelector('.form__chronic-item');

OPEN_BUTTON.addEventListener('click', open);

CLOSE_BUTTON.addEventListener('click', close);

MODAL.addEventListener('click', function(event){
  let target = event.target;
  console.log(target);
  
  if ( target.closest('.chronic-disease__button') ) {
    removeElem(event);
  } else if ( !DIALOG.contains(target) ) {
    close();
  }
});

BODY.addEventListener('keydown', function(event){
  let keyCode = event.key;
  if (keyCode === 'Escape' && MODAL.classList.contains('modal_active')) {
    close();
  }  
});

CHRONIC_INPUT.addEventListener('keydown', function(event) {
  let keyCode = event.key;
  let textInput;
  if (keyCode === 'Enter') {
    event.preventDefault();
    textInput = CHRONIC_INPUT.value;
    createElement(textInput);
  }
});



function open() {
  BODY.classList.add('modal-active');
  MODAL.classList.add('modal_active');
  OPEN_BUTTON.setAttribute('aria-hidden', false);

  let headerHeight = HEADER.offsetHeight;
  if (document.documentElement.clientWidth < 768) {
    DIALOG.setAttribute('style', `margin-top: ${headerHeight}px;`);
  }
}

function close() {
  BODY.classList.remove('modal-active');
  MODAL.classList.remove('modal_active');
  OPEN_BUTTON.setAttribute('aria-hidden', true);

  if (document.documentElement.clientWidth < 768) {
    DIALOG.removeAttribute('style');
  }
}

function removeElem(event) {
  let elem = event.target.closest('.form__chronic-item');
  elem.remove();
}

function createElement(text) {
  if (CHRONIC_INPUT.value != '') {
    let newElement = CHRONIC_ITEM.cloneNode(true);
    CHRONIC_LIST.appendChild(newElement);

    let newElementInput = newElement.querySelector('.chronic-disease__input');
    let newElementText = newElement.querySelector('.chronic-disease__text');
    let newElementButton = newElement.querySelector('.chronic-disease__button');

    newElementInput.setAttribute('value', text);
    newElementText.textContent = text;
    newElementButton.setAttribute('aria-label', `Удалить заболевание ${text}`)
  }
  CHRONIC_INPUT.value = '';
}