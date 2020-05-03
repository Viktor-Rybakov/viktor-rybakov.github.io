'use strict';

const MODAL = document.querySelector('.js-modal');
const BODY = document.querySelector('body');
const DIALOG = document.querySelector('.js-modal__section');
const OPEN_BUTTON = document.querySelector('.js-user-info__button');
const CLOSE_BUTTON = document.querySelector('.js-modal__close-button');

OPEN_BUTTON.addEventListener('click', open);

CLOSE_BUTTON.addEventListener('click', close);

MODAL.addEventListener('click', function(event){
  let target = event.target;
  if ( !DIALOG.contains(target) ) {
    close();
  }
});

BODY.addEventListener('keydown', function(event){
  let keyCode = event.key;
  if (keyCode === 'Escape' && MODAL.classList.contains('modal_active')) {
    close();
  }  
});

function open() {
  BODY.classList.add('modal-active');
  MODAL.classList.add('modal_active');
  OPEN_BUTTON.setAttribute('aria-hidden', false);
}

function close() {
  BODY.classList.remove('modal-active');
  MODAL.classList.remove('modal_active');
  OPEN_BUTTON.setAttribute('aria-hidden', true);
}