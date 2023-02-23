const transferBtns = document.querySelectorAll('.dashboard__buy'),
      transferModal = document.querySelector('.transferModal'),
      closeIconModal = document.querySelector('.transferModal .modal__close'),
      closeTransferModal = document.querySelector('.transferModal .modal__close-btn'),
      withModalTrigger = document.querySelector('#withModalTrigger'),
      withModal = document.querySelector('#withModal'),
      modals = document.querySelectorAll('.modal')

function closeModal(closeIcon, closeBtn, modal) {

  closeIcon.addEventListener('click', () => {
    modal.classList.remove('show-modal'),   document.body.style.overflow = ''
  });
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal'), document.body.style.overflow = ''
  })
}

if (withModalTrigger) {
  withModalTrigger.addEventListener('click', () => {
    withModal.classList.add('show-modal')
    document.body.style.overflow = 'hidden'
  })
  closeModal(
    document.querySelector('#withModal .modal__close'),
    document.querySelector('#withModal .modal__close-btn'),
    withModal
  );

}

if (transferModal) {
  transferBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      transferModal.classList.add('show-modal')
      document.body.style.overflow = 'hidden'
    })
  })
  // if (transferModal.classList.contains('show-modal')) {
  //   console.log('JOPA');
  // }
  closeModal(closeIconModal, closeTransferModal, transferModal);
}


