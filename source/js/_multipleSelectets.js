function showDropdown(trigger, dropdown) {
  trigger.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-collapse');
    trigger.classList.toggle('selected-input');
  })
}


showDropdown(document.querySelector('.calc__dropdown-trigger'), document.querySelector('.second-dropdown'));

showDropdown(document.querySelector('#depDropdownTrigger'), document.querySelector('#depDropdown'))
