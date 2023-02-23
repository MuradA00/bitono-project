const transferBtns = document.querySelectorAll('.dashboard__buy'),
      transferModal = document.querySelector('.transferModal'),
      closeIconModal = document.querySelector('.transferModal .modal__close'),
      closeTransferModal = document.querySelector('.transferModal .modal__close-btn'),
      withModalTrigger = document.querySelector('#withModalTrigger'),
      withModal = document.querySelector('.modal_width'),
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
    if (withModal.classList.contains('show-modal')) {
      window.addEventListener('click', function(e) {
        console.log(e.target);
        if (e.target === withModal.querySelector('.modal__overlay')) {
          withModal.classList.remove('show-modal')
        }
      })
    }
  })
  closeModal(
    document.querySelector('.modal_width .modal__close'),
    document.querySelector('.modal_width .modal__close-btn'),
    withModal
  );

}

if (transferModal) {
  transferBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      transferModal.classList.add('show-modal')
      document.body.style.overflow = 'hidden'
      if (transferModal.classList.contains('show-modal')) {
        window.addEventListener('click', function(e) {
          if (e.target === transferModal.querySelector('.modal__overlay')) {
            transferModal.classList.remove('show-modal')
          }
        })
      }
    })
  })
  closeModal(closeIconModal, closeTransferModal, transferModal);
}


