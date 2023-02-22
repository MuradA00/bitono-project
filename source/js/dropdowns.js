const secondCalcDropdownTrigger = document.querySelector('.calc__dropdown-trigger'),
      secondCalcDropdown = document.querySelector('.second-dropdown');

secondCalcDropdownTrigger.addEventListener('click', () => {
  secondCalcDropdown.classList.toggle('dropdown-collapse')
})

function selectedFromDropdown(selectItems, dropdown, currentSelect) {
  selectItems.forEach(item => {
    item.addEventListener('click', function() {
      dropdown.classList.remove('dropdown-collapse')
      let currentText = this.innerHTML;
      currentSelect.innerHTML = currentText;
    })
  })
}

selectedFromDropdown(
  document.querySelectorAll('#firstCalcDropdown li'),
  document.querySelector('#firstCalcDropdown'),
  document.querySelector('#firstCalcSelect')
)

selectedFromDropdown(document.querySelectorAll('.second-dropdown li'), document.querySelector('.second-dropdown'), document.querySelector('.calc__dropdown-trigger .hashrate__grid-col-info'))

selectedFromDropdown(document.querySelectorAll('#depDropdown ul li'), document.querySelector('#depDropdown'), document.querySelector('#depDropdownTrigger .hashrate__grid-col-info'))


// document.querySelectorAll('.dropdown__item').forEach(item => {
//   item.addEventListener('click', function() {
//     dropdown.classList.remove('dropdown-collapse')
//     let currentText = this.innerHTML;
//     document.querySelector('.hashrate__grid-col-info').innerHTML = currentText;
//   })
// })

