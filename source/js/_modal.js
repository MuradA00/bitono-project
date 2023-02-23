const transferBtns = document.querySelectorAll('.dashboard__buy'),
      transferModal = document.querySelector('#transferModal'),
      closeIconModal = document.querySelector('#transferModal .modal__close'),
      closeTransferModal = document.querySelector('#transferModal .modal__close-btn'),
      withModalTrigger = document.querySelector('#withModalTrigger'),
      withModal = document.querySelector('#withModal');

// function openModal(modal) {
//   modal.classList.add('show-modal');
// }

function closeModal(closeIcon, closeBtn, modal) {

  closeIcon.addEventListener('click', () => {
    modal.classList.remove('show-modal'),   document.body.style.overflow = ''
  });
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal'), document.body.style.overflow = ''
  })
}

withModalTrigger.addEventListener('click', () => {
  withModal.classList.add('show-modal')
  document.body.style.overflow = 'hidden'
})

transferBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    transferModal.classList.add('show-modal')
    document.body.style.overflow = 'hidden'
  })
})



closeModal(
  document.querySelector('#withModal .modal__close'),
  document.querySelector('#withModal .modal__close-btn'),
  withModal
);

closeModal(closeIconModal, closeTransferModal, transferModal);

