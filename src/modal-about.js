(() => {
  const refs = {
    openModalBtn: document.querySelector('.start-modal'),
    closeModalBtn: document.querySelector('.end-modal'),
    modal: document.querySelector('.content-modal'),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();