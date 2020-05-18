'use strict'

let feedbackSlider = document.querySelector('.js-feedback-slider');
let feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
let direction;
let clickPrev = prev;
let clickNext = next;
let slideWidth = feedbackList.children[1].getBoundingClientRect().left - feedbackList.children[0].getBoundingClientRect().left;

const FEEDBACK_NEXT = feedbackSlider.querySelector('.js-feedback-slider__forward');
const FEEDBACK_PREV = feedbackSlider.querySelector('.js-feedback-slider__preview');

window.addEventListener('resize', function(){
  slideWidth = feedbackList.children[1].getBoundingClientRect().left - feedbackList.children[0].getBoundingClientRect().left;
});

FEEDBACK_PREV.addEventListener('click', clickPrev);
FEEDBACK_NEXT.addEventListener('click', clickNext);
feedbackList.addEventListener('transitionend', removeSlide);

function prev() {
  direction = 1;
  if (clickPrev == null) {
    return
  } else {
    clickPrev = null;
    feedbackList.style.transition = 'none';
    feedbackList.style.transform = `translateX(-${slideWidth}px)`;

    let nextSlide = feedbackList.lastElementChild.cloneNode(true);

    if (feedbackList.firstElementChild.classList.contains('feedback-slider__list-item--white')) {
      nextSlide.classList.remove('feedback-slider__list-item--white');
    } else {
      nextSlide.classList.add('feedback-slider__list-item--white');
    }
    feedbackList.prepend(nextSlide);

    setTimeout(function() {
      feedbackList.style.transition = '0.2s';
      feedbackList.style.transform = 'translateX(0)';
    }, 50);
    
    feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
  }
}
  
function next() {
  direction = -1;
  if (clickNext == null) {
    return
  } else {
    let nextSlide = feedbackList.firstElementChild.cloneNode(true);

    if (feedbackList.lastElementChild.classList.contains('feedback-slider__list-item--white')) {
      nextSlide.classList.remove('feedback-slider__list-item--white');
    } else {
      nextSlide.classList.add('feedback-slider__list-item--white');
    }

    feedbackList.append(nextSlide);
    feedbackList.style.transform = `translateX(-${slideWidth}px)`;
    
    feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
    clickNext = null;
  }
}

function removeSlide() {
  if (direction === -1) {
    feedbackList.firstElementChild.remove();

    feedbackList.style.transition = 'none';
    feedbackList.style.transform = 'translateX(0)';
    setTimeout(function(){
      feedbackList.style.transition = '0.2s';
      clickNext = next;
    }, 50);
    
  } else if (direction === 1) {
    feedbackList.lastElementChild.remove();
    clickPrev = prev;
  }
  
  feedbackList = feedbackSlider.querySelector('.js-feedback-slider__list');
}
'use strict'

const HEADER = document.querySelector('.js-header');
const MENU = document.querySelector('.js-menu');
const MAIN = document.querySelector('.js-main');
const OPEN = document.querySelector('.js-menu-open');
const CLOSE = document.querySelector('.js-menu-close');
let headerHeight;

if (window.innerWidth <= 768) {
  addMarginMain();
}

window.addEventListener('resize', function(){
  if (window.innerWidth <= 768) {
    addMarginMain();
  } else {
    removeMarginMain();
  }
  closeMenu();
});

window.addEventListener('click', function(event) {
  let target = event.target;

  if ( OPEN.contains(target) ) {
    openMenu();
  }
  if ( CLOSE.contains(target) ) {
    closeMenu();
  }
  if ( target.closest('.menu__link') ) {
    closeMenu();
  } 
  if ( target.closest('.menu__button') ) {
    closeMenu();
  }
  if ( !MENU.contains(target) && !HEADER.contains(target) && MENU.classList.contains('menu--open') ) {
    closeMenu();
  }
});

function openMenu() {
  headerHeight = HEADER.getBoundingClientRect().height;
  MENU.classList.add('menu--open');
  MENU.style.top = headerHeight + 'px';
  OPEN.classList.add('header__button--disabled');
  CLOSE.classList.remove('header__button--disabled');
}

function closeMenu() {
  MENU.classList.remove('menu--open');
  MENU.removeAttribute('style');
  OPEN.classList.remove('header__button--disabled');
  CLOSE.classList.add('header__button--disabled');
}

function addMarginMain() {
  headerHeight = HEADER.getBoundingClientRect().height;
  MAIN.style.marginTop = headerHeight + 'px';
}

function removeMarginMain() {
  MAIN.removeAttribute('style');
}
'use strict'

const SCREENSHOTS_SLIDER = document.querySelector('.js-screenshots-slider');
const SCREENSHOTS_LIST = SCREENSHOTS_SLIDER.querySelectorAll('.js-screenshots-slider__item');
const SCREENSHOTS_NUMBER = SCREENSHOTS_LIST.length;
const SCREENSHOTS_NEXT = SCREENSHOTS_SLIDER.querySelector('.js-screenshots-slider__forward');
const SCREENSHOTS_PREV = SCREENSHOTS_SLIDER.querySelector('.js-screenshots-slider__preview');

SCREENSHOTS_NEXT.addEventListener('click', function(){
  for (let i = 0; i < SCREENSHOTS_NUMBER; ++i) {
    let newSlideNumber;
    let currentSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber);

    if (currentSlideNumber === SCREENSHOTS_NUMBER) {
      newSlideNumber = 1;
    } else {
      newSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber) + 1;
    }
    SCREENSHOTS_LIST[i].dataset.slideNumber = newSlideNumber;
  }
});

SCREENSHOTS_PREV.addEventListener('click', function(){
  for (let i = 0; i < SCREENSHOTS_NUMBER; ++i) {
    let newSlideNumber;
    let currentSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber);

    if (currentSlideNumber === 1) {
      newSlideNumber = 7;
    } else {
      newSlideNumber = +(SCREENSHOTS_LIST[i].dataset.slideNumber) - 1;
    }
    SCREENSHOTS_LIST[i].dataset.slideNumber = newSlideNumber;
  }
});
'use strict'

const VIDEO = document.querySelector('.js-video');
const PLAY = document.querySelector('.js-play');
const PAUSE = document.querySelector('.js-pause');

PLAY.addEventListener('click', function(){
  VIDEO.play();
  PLAY.classList.toggle('video-section__button--active');
  PAUSE.classList.toggle('video-section__button--active');
  VIDEO.classList.add('video-section__video--playing');
});

PAUSE.addEventListener('click', function(){
  VIDEO.pause();
  PLAY.classList.toggle('video-section__button--active');
  PAUSE.classList.toggle('video-section__button--active');
  VIDEO.classList.remove('video-section__video--playing');
});

