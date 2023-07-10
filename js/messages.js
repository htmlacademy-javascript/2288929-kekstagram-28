const successMessage = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorMessage = document.querySelector('#error')
  .content
  .querySelector('.error');


const showSuccessMessage = () => {
  const node = successMessage.cloneNode(true);

  const closeSuccessMessage = () => {
    node.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  function onDocumentKeydown (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSuccessMessage();
    }
  }

  const closeSuccessMessageClick = (evt) => {
    if (!evt.target.classList.contains('success__inner')) {
      closeSuccessMessage();
    }
  };

  document.body.append(node);
  node.addEventListener('click', closeSuccessMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};


const showErrorMessage = () => {
  const node = errorMessage.cloneNode(true);

  const closeErrorMessage = () => {
    node.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  function onDocumentKeydown (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeErrorMessage();
    }
  }

  const closeErrorMessageClick = (evt) => {
    if (!evt.target.classList.contains('error__inner')) {
      closeErrorMessage();
    }
  };

  document.body.append(node);
  document.body.classList.add('has-error');
  node.addEventListener('click', closeErrorMessageClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {showSuccessMessage, showErrorMessage};
