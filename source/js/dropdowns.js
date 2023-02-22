const secondCalcDropdownTrigger = document.querySelector('.calc__dropdown-trigger'),
      secondCalcDropdown = document.querySelector('.second-dropdown');

secondCalcDropdownTrigger.addEventListener('click', () => {
  secondCalcDropdown.classList.toggle('dropdown-collapse')
})
