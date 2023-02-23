AOS.init({
  once: true,
  offset: 125,
  duration: 800
})

$(function(){
  $('.plans__marquee').marquee({

  allowCss3Support: true,

  css3easing: 'linear',

  easing: 'linear',

  delayBeforeStart: 500,

  direction: 'left',

  duplicated: true,

  duration: 14000,

  gap: 40,

  pauseOnCycle: true,

  pauseOnHover: true,

  startVisible: true

  });
});

const closeIcon = document.querySelector('.menu__close'),
      burger = document.querySelector('.header__burger'),
      navLinks = document.querySelectorAll('.menu__nav-link'),
      menu = document.querySelector('.menu'),
      body = document.body,
      html = document.documentElement,
      warningPopups = document.querySelectorAll('.hashrate__popup'),
      warningClose = document.querySelectorAll('.hashrate__close'),
      headerDropdown = document.querySelector('.header-dropdown'),
      headerDropdownTrigger = document.querySelector('.header__currency'),
      depositBtns = document.querySelectorAll('.deposit__tabs-item'),
      desktopHeaderCurrency = document.querySelector('.desktop-currency'),
      desktopHeaderDropdown = document.querySelector('.desktop-header-dropdown');

closeMenuByClick();

let currencyIcon = document.querySelector('.desktop-currency .header__currency-icon img');
let currencyName = document.querySelector('.desktop-currency .header__currency-name');
let currencyAmount = document.querySelector('.desktop-currency .header__currency-amount');

document.querySelectorAll('.header-dropdown__item').forEach(item => {

  item.addEventListener('click', function() {
    let currentCoinText = this.querySelector('.header-dropdown__coin span').textContent;
    let currentCointAmount = this.querySelector('.header-dropdown__amount').textContent;
    let currentCoinIcon = this.querySelector('.header-dropdown__coin img');
    currencyName.textContent = currentCoinText;
    currencyIcon.src = currentCoinIcon.src;
    currencyAmount.textContent = currentCointAmount;
  })
})


let mobCurrencyIcon = document.querySelector('.menu__dropdown .header__currency-icon img');
let mobCurrencyName = document.querySelector('.menu__dropdown .header__currency-name');
let mobCurrencyAmount = document.querySelector('.menu__dropdown .header__currency-amount');

document.querySelectorAll('.header-dropdown__item').forEach(item => {

  item.addEventListener('click', function() {
    let currentCoinText = this.querySelector('.header-dropdown__coin span').textContent;
    let currentCointAmount = this.querySelector('.header-dropdown__amount').textContent;
    let currentCoinIcon = this.querySelector('.header-dropdown__coin img');
    mobCurrencyName.textContent = currentCoinText;
    mobCurrencyIcon.src = currentCoinIcon.src;
    mobCurrencyAmount.textContent = currentCointAmount;
  })
})

headerDropdownTrigger.addEventListener('click', (e) => {
  headerDropdown.classList.toggle('header-dropdown-collapse')
  headerDropdownTrigger.classList.toggle('header-dropdown-active')
})

desktopHeaderCurrency.addEventListener('click', (e) => {
  desktopHeaderDropdown.classList.toggle('header-dropdown-collapse')
  desktopHeaderCurrency.classList.toggle('header-dropdown-active')
})

function selectedFromDropdown(selectItems, dropdown, currentSelect) {
  if (selectItems && dropdown && currentSelect) {
    selectItems.forEach(item => {
      item.addEventListener('click', function() {
        dropdown.classList.remove('dropdown-collapse')
        let currentText = this.innerHTML;
        currentSelect.innerHTML = currentText;
      })
    })
  } else {
    return
  }
}

function showMenu() {
  closeIcon.classList.remove('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
    html.classList.add('body-locked')
    document.querySelector('.menu__dropdown ul').style.display = 'flex'
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');
    document.querySelector('.menu__dropdown ul').style.display = 'flex'
  }
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked')
  html.classList.remove('body-locked');
  document.querySelector('.menu__currency').classList.remove('header-dropdown-active')
  document.querySelector('.menu__dropdown ul').classList.remove('header-dropdown-collapse')
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

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

if (depositBtns) {
  depositBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      depositBtns.forEach(tab => tab.classList.remove('active-tab'));

      this.classList.toggle('active-tab');
    })
  })
}

const dropdownTrigger = document.querySelector('.hashrate__grid-col-output'),
      dropdown = document.querySelector('.dropdown');

dropdownTrigger.addEventListener('click', () => {
  dropdown.classList.toggle('dropdown-collapse')
})

function closePopup(popUp, closePopupIcon) {
  closePopupIcon.addEventListener('click', () => popUp.classList.add('close-popup'))
}

closePopup(document.querySelector('.hashrate__error'), document.querySelector('.hashrate__close-error'));

closePopup(document.querySelector('.hashrate__success'), document.querySelector('.hashrate__close-success'));


