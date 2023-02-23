const faqItems = document.querySelectorAll('.faq-list__item');

faqItems.forEach(btn => {
  btn.addEventListener('click', function() {
    faqItems.forEach(item => item.classList.remove('collapse'));

    this.classList.add('collapse')
  })
})
