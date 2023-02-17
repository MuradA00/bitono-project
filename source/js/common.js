AOS.init({
  once: true,
  offset: 125,
  duration: 800
})

const closeIcon = document.querySelector('.menu__close'),
      burger = document.querySelector('.header__burger'),
      navLinks = document.querySelectorAll('.menu__nav-link'),
      menu = document.querySelector('.menu'),
      body = document.body,
      html = document.documentElement;

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

closeMenuByClick();

function showMenu() {
  closeIcon.classList.remove('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
    html.classList.add('body-locked')
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');
  }
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked')
  html.classList.remove('body-locked');
}

if (burger) {
  closeIcon.addEventListener('click', closeMenu);
}

if (burger) {
  burger.addEventListener('click', showMenu);
}

body.addEventListener('click', (e) => {
  if (burger.classList.contains('active-burger')) {
    if (e.target === body) {
      closeMenu();
    }
  }
})


$(function(){
  $('.plans__marquee').marquee({
  //если хотите всегда анимировать при помощи jQuery
  allowCss3Support: true,

  css3easing: 'linear',

  easing: 'linear',

  //приостанавливает время перед стартом следующей анимации в миллисекундах
  delayBeforeStart: 500,
  //'left', 'right', 'up' or 'down'
  direction: 'left',

  //true или false - должен ли marquee быть дублирован для эффекта продолжающегося потока
  duplicated: true,

  //скорость marquee в миллисекундах
  duration: 7000,

  //расстояние в пикселях между бегущими строками
  gap: 40,

  //приостанавливает цикл marquee
  pauseOnCycle: true,

  pauseOnHover: true,

  startVisible: true

  });
});
