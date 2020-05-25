'use strict';

const SECOND_SECTION = document.querySelector('.js-second-section');
const WINTER = document.querySelector('.js-winter');
const SECOND_CARD = document.querySelector('.js-second-section__card');
const FLIP_CARD = document.querySelector('.js-flip-card');
const SECTION_HEIGHT = SECOND_SECTION.getBoundingClientRect().top + window.pageYOffset;

let currentScroll;

window.addEventListener('scroll', function(){
  currentScroll = window.pageYOffset;

  if (currentScroll > SECTION_HEIGHT - 150) {
    addAnimation();
  }
});

function addAnimation(){
  WINTER.classList.add('second-section__title--animation');
  SECOND_CARD.classList.add('second-section__card--animation');
  FLIP_CARD.classList.add('second-section__flip-card--animation');
}
'use strict';

const CARD = document.querySelector('.js-flip-card');
const DESCRIPTION = CARD.querySelector('.js-flip-card__description');
const PHOTO = CARD.querySelector('.js-flip-card__photo');

CARD.addEventListener('click', function(event) {
  let target = event.target;

  if ( target.closest('.js-flip-card-forward') ) {
    DESCRIPTION.classList.add('flip-card__description--disabled');
    PHOTO.classList.remove('flip-card__photo--disabled');
  }

  if ( target.closest('.js-flip-card-back') ) {
    DESCRIPTION.classList.remove('flip-card__description--disabled');
    PHOTO.classList.add('flip-card__photo--disabled');
  }
});

