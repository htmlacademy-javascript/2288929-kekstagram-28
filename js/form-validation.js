const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoInput = document.querySelector('#upload-file');
const editPhotoForm = document.querySelector('.img-upload__overlay');
const closeEditPhotoButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;


const closeUploadPhoto = () => {
  editPhotoForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadPhotoInput.value = '';
  hashtagsInput.value = '';
  commentField.value = '';
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape'
  && !(document.activeElement === hashtagsInput)
  && !(document.activeElement === commentField)) {
    evt.preventDefault();
    closeUploadPhoto();
  }
}

const showUploadPhoto = () => {
  editPhotoForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadPhotoInput.addEventListener('change', () => {
  showUploadPhoto();
});

closeEditPhotoButton.addEventListener('click', closeUploadPhoto);

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

function validateCommentInput (value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

pristine.addValidator(commentField, validateCommentInput, 'Не более 140 символов');

function validateHashtagFormatInput () {
  const hashtags = hashtagsInput.value.split(' ');

  for (let i = 0; i < hashtags.length; i++) {
    if (!HASHTAG_REGEX.test(hashtags[i])) {
      return false;
    }
  }
  return true;
}

pristine.addValidator(hashtagsInput, validateHashtagFormatInput, 'Хэш-теги не соответствуют формату');

function validateHashtagCountInput () {
  const hashtags = hashtagsInput.value.split(' ');
  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags.length <= MAX_HASHTAG_AMOUNT) {
      return true;
    }
  }
}

pristine.addValidator(hashtagsInput, validateHashtagCountInput, 'Можно использовать не более пяти хэш-тегов');

function validateHashtagDublicateInput () {
  const hashtags = hashtagsInput.value.split(' ');
  const isHashtagsDuplicate = new Set(hashtags);

  for (let i = 0; i < hashtags.length; i++) {
    if (isHashtagsDuplicate.size === hashtags.length) {
      return true;
    }
  }
}

pristine.addValidator(hashtagsInput, validateHashtagDublicateInput, 'Хэш-теги не должны повторяться');

uploadPhotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
}
);
