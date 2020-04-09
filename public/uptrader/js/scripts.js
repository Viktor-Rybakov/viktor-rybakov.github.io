let link1 = document.querySelector('.js-menu__link_trade');
let link2 = document.querySelector('.js-menu__link_invest');
let link3 = document.querySelector('.js-menu__link_invite');
let secondSection = document.querySelector('.js-second-section');
let container1 = document.querySelector('.js-tabs__container_1');
let container2 = document.querySelector('.js-tabs__container_2');
let container3 = document.querySelector('.js-tabs__container_3');
let tabLink1 = document.querySelector('.js-tabs__link1');
let tabLink2 = document.querySelector('.js-tabs__link2');
let tabLink3 = document.querySelector('.js-tabs__link3');


link1.onclick = function() {
  event.preventDefault();

  secondSection.scrollIntoView({behavior: "smooth"});

  if ( container1.getAttribute('aria-expanded') == 'false') {
    container1.classList.add('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabLink1.classList.add('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

link2.onclick = function() {
  event.preventDefault();

  secondSection.scrollIntoView({behavior: "smooth"});

  if ( container2.getAttribute('aria-expanded') == 'false') {
    container2.classList.add('tabs__container_active');
    container2.setAttribute('aria-expanded', true);
    tabLink2.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

link3.onclick = function() {
  event.preventDefault();
  console.log(container3.getAttribute('aria-expanded'));

  secondSection.scrollIntoView({behavior: "smooth"});

  if ( container3.getAttribute('aria-expanded') == 'false' ) {
    container3.classList.add('tabs__container_active');
    container3.setAttribute('aria-expanded', true);
    tabLink3.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
  }
};

tabLink1.onclick = function() {
  event.preventDefault();

  if ( container1.getAttribute('aria-expanded') == 'false' ) {
    container1.classList.add('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabLink1.classList.add('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

tabLink2.onclick = function() {
  event.preventDefault();

  if ( container2.getAttribute('aria-expanded') == 'false' ) {
    container2.classList.add('tabs__container_active');
    container2.setAttribute('aria-expanded', true);
    tabLink2.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

tabLink3.onclick = function() {
  event.preventDefault();

  if ( container3.getAttribute('aria-expanded') == 'false' ) {
    container3.classList.add('tabs__container_active');
    container3.setAttribute('aria-expanded', true);
    tabLink3.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
  }
};
let visuallyHidden = document.querySelector('.js-visually-hidden');
let tabsContent1 = document.querySelector('.js-tabs__content1');
let tabsContent2 = document.querySelector('.js-tabs__content2');
let tabsContent3 = document.querySelector('.js-tabs__content3');
let accordionTab1 = document.querySelector('.js-tabs__accordion_tab1');
let accordionTab2 = document.querySelector('.js-tabs__accordion_tab2');
let accordionTab3 = document.querySelector('.js-tabs__accordion_tab3');

if ( document.documentElement.clientWidth <= 768 ) {
  visuallyHidden.classList.remove('visually-hidden');
  container1.classList.remove('tabs__container_active');
  container1.setAttribute('aria-expanded', true);
  container2.classList.remove('tabs__container_active');
  container2.setAttribute('aria-expanded', true);
  container3.classList.remove('tabs__container_active');
  container3.setAttribute('aria-expanded', true);
}

window.addEventListener('resize', function(event) {
  if ( document.documentElement.clientWidth > 768 ) {
    visuallyHidden.classList.add('visually-hidden');
    container1.classList.add('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabsContent1.setAttribute('aria-expanded', true);
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabsContent2.setAttribute('aria-expanded', false);
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabsContent3.setAttribute('aria-expanded', false);
  } else if ( document.documentElement.clientWidth <= 768 ) {
    visuallyHidden.classList.remove('visually-hidden');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabsContent1.setAttribute('aria-expanded', false);
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', true);
    tabsContent2.setAttribute('aria-expanded', false);
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', true);
    tabsContent3.setAttribute('aria-expanded', false);
  }
});

accordionTab1.onclick = function() {
  accordionTab1.classList.toggle('tabs__accordion_active');
  tabsContent1.classList.toggle('tabs__content_active');
  container1.classList.toggle('tabs__container_active');

  if ( tabsContent1.getAttribute('aria-expanded') == 'false') {
    tabsContent1.setAttribute('aria-expanded', true);
    secondSection.classList.add('second-section_bg-off');
  } else if ( tabsContent1.getAttribute('aria-expanded') == 'true' ) {
    tabsContent1.setAttribute('aria-expanded', false);
    secondSection.classList.remove('second-section_bg-off');
  }

  accordionTab2.classList.remove('tabs__accordion_active');
  tabsContent2.classList.remove('tabs__content_active');
  tabsContent2.setAttribute('aria-expanded', false);
  container2.classList.remove('tabs__container_active');

  accordionTab3.classList.remove('tabs__accordion_active');
  tabsContent3.classList.remove('tabs__content_active');
  tabsContent3.setAttribute('aria-expanded', false);
  container3.classList.remove('tabs__container_active');

}

accordionTab2.onclick = function() {
  accordionTab2.classList.toggle('tabs__accordion_active');
  tabsContent2.classList.toggle('tabs__content_active');
  container2.classList.toggle('tabs__container_active');

  if ( tabsContent2.getAttribute('aria-expanded') == 'false') {
    tabsContent2.setAttribute('aria-expanded', true);
    secondSection.classList.add('second-section_bg-off');
  } else if ( tabsContent2.getAttribute('aria-expanded') == 'true' ) {
    tabsContent2.setAttribute('aria-expanded', false);
    secondSection.classList.remove('second-section_bg-off');
  }

  accordionTab1.classList.remove('tabs__accordion_active');
  tabsContent1.classList.remove('tabs__content_active');
  tabsContent1.setAttribute('aria-expanded', false);
  container1.classList.remove('tabs__container_active');

  accordionTab3.classList.remove('tabs__accordion_active');
  tabsContent3.classList.remove('tabs__content_active');
  tabsContent3.setAttribute('aria-expanded', false);
  container3.classList.remove('tabs__container_active');
}

accordionTab3.onclick = function() {
  accordionTab3.classList.toggle('tabs__accordion_active');
  tabsContent3.classList.toggle('tabs__content_active');
  container3.classList.toggle('tabs__container_active');

  if ( tabsContent3.getAttribute('aria-expanded') == 'false') {
    tabsContent3.setAttribute('aria-expanded', true);
    secondSection.classList.add('second-section_bg-off');
  } else if ( tabsContent3.getAttribute('aria-expanded') == 'true' ) {
    tabsContent3.setAttribute('aria-expanded', false);
    secondSection.classList.remove('second-section_bg-off');
  }

  accordionTab1.classList.remove('tabs__accordion_active');
  tabsContent1.classList.remove('tabs__content_active');
  tabsContent1.setAttribute('aria-expanded', false);
  container1.classList.remove('tabs__container_active');

  accordionTab2.classList.remove('tabs__accordion_active');
  tabsContent2.classList.remove('tabs__content_active');
  tabsContent2.setAttribute('aria-expanded', false);
  container2.classList.remove('tabs__container_active');
}