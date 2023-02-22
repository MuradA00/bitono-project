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

selectedFromDropdown(
  document.querySelectorAll('#depDropdown li'),
  document.querySelector('#depDropdown'),
  document.querySelector('#depDropdownTrigger .hashrate__grid-col-info')
)
