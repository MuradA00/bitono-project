

const firstBlock = document.querySelector('.bonus__block_first');

console.log(getComputedStyle(firstBlock).transform);

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

$(function(){
  $('.plans__marquee').marquee({


  //если хотите всегда анимировать при помощи jQuery
  allowCss3Support: true,

  //работает, когда allowCss3Support установлено в true - смотрите полный список http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
  css3easing: 'linear',

  //требует jQuery easing плагин. По умолчанию - 'linear'
  easing: 'linear',

  //приостанавливает время перед стартом следующей анимации в миллисекундах
  delayBeforeStart: 1000,
  //'left', 'right', 'up' or 'down'
  direction: 'left',

  //true или false - должен ли marquee быть дублирован для эффекта продолжающегося потока
  duplicated: true,

  //скорость marquee в миллисекундах
  duration: 5000,

  //расстояние в пикселях между бегущими строками
  gap: 40,

  //приостанавливает цикл marquee
  pauseOnCycle: true,

  //приостанавливает marquee при наведении курсора мыши - используя плагин jQuery https://github.com/tobia/Pause
  pauseOnHover: true,

  //marquee виден, когда он изначально позиционирован у границы, по направлении которой будет двигаться
  startVisible: false

  });
});
