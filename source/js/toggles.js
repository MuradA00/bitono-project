const hashBlocks = document.querySelectorAll('.hashrate__grid-item-block')

hashBlocks.forEach(btn => {
  btn.addEventListener('click', function() {
    hashBlocks.forEach(item => item.classList.remove('active-block'));

    this.classList.add('active-block')
  })
})
