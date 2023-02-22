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
  document.querySelectorAll('#withdrawDropdown li'),
  document.querySelector('#withdrawDropdown'),
  document.querySelector('#withdrawTrigger .hashrate__grid-col-info')
)
