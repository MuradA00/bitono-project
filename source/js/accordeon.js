const faqItems = document.querySelectorAll('.faq-list__item');

faqItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('collapse')
  })
})
