function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  document.querySelector('.copied-popup').classList.add('copied-show')
  setTimeout(function() {
    document.querySelector('.copied-popup').classList.remove('copied-show')
  }, 2000)
};

function secondCopy() {
  // Get the text field
  var copyText = document.getElementById("secondInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);


  // Alert the copied text
  document.querySelector('#secondCopyPopup').classList.add('copied-show')
  setTimeout(function() {
    document.querySelector('#secondCopyPopup').classList.remove('copied-show')
  }, 2000)
};

function thirdCopy() {
  // Get the text field
  var copyText = document.getElementById("thirdInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);


  // Alert the copied text
  document.querySelector('#thirdCopyPopup').classList.add('copied-show')
  setTimeout(function() {
    document.querySelector('#thirdCopyPopup').classList.remove('copied-show')
  }, 2000)
};

