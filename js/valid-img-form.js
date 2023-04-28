const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoInput = document.querySelector('#upload-file');
const editPhotoForm = document.querySelector('.img-upload__overlay');
const bodyDocument = document.querySelector('body');
const closeEditPhotoForm = document.querySelector('#upload-cancel');
const hashtagsForm = document.querySelector('.text__hashtags');
const commentForm = document.querySelector('.text__description');


const closeUploadPhoto = () => {
  editPhotoForm.classList.add('hidden');
  bodyDocument.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadPhotoInput.value = '';
  hashtagsForm.value = '';
  commentForm.value = '';
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadPhoto();
  }
}

const showUploadPhoto = () => {
  editPhotoForm.classList.remove('hidden');
  bodyDocument.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadPhotoInput.addEventListener('change', () => {
  showUploadPhoto();
});

closeEditPhotoForm.addEventListener('click', closeUploadPhoto);

const pristine = new Pristine(uploadPhotoForm);

uploadPhotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма содержит ошибки');
  }
}
);


uploadPhotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  const hashtagsArr = hashtagsForm.value.split(' ');
  const hashtagsRequirement = /^#[a-zа-яё0-9]{1,19}$/i;

  for (let i = 0; i < hashtagsArr.length; i++) {
    if ((hashtagsArr.length <= 5) && hashtagsRequirement.test(hashtagsArr[i])) {
      console.log('Хэштег в порядке');
    }
  }
})
