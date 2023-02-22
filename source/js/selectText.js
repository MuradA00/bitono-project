

function selectText(containerid) {
  if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  }
}

// const textBoxes = document.querySelectorAll('.promo__box-inner');

// textBoxes.forEach(box => {
//   box.addEventListener('click', selectText());
// })
