const uploadPhotoForm = document.querySelector('.img-upload__form');
const uploadPhotoInput = document.querySelector('#upload-file');
const editPhotoForm = document.querySelector('.img-upload__overlay');
const closeEditPhotoButton = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const imgInProcess = document.querySelector('.img-upload__effect-level');
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAG_AMOUNT = 5;

const pristine = new Pristine(uploadPhotoForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
});

const closeUploadPhoto = () => {
  editPhotoForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadPhotoForm.reset();
  pristine.reset();
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
  imgInProcess.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function validateCommentInput (value) {
  return value.length <= MAX_COMMENT_LENGTH;
}
const getHashtags = () => hashtagsInput.value.split(' ').filter((hashtag) => hashtag.length > 0);

function validateHashtagFormatInput () {
  const hashtags = getHashtags();

  for (let i = 0; i < hashtags.length; i++) {
    if (!HASHTAG_REGEX.test(hashtags[i])) {
      return false;
    }
  }

  return true;
}

function validateHashtagCountInput () {
  const hashtags = getHashtags();

  return hashtags.length <= MAX_HASHTAG_AMOUNT;
}

function validateHashtagDublicateInput () {
  const hashtags = getHashtags();
  const isHashtagsDuplicate = new Set(hashtags);

  return isHashtagsDuplicate.size === hashtags.length;
}

const setupFormValidation = () => {
  pristine.addValidator(commentField, validateCommentInput, 'Не более 140 символов');
  pristine.addValidator(hashtagsInput, validateHashtagFormatInput, 'Хэш-теги не соответствуют формату');
  pristine.addValidator(hashtagsInput, validateHashtagCountInput, 'Можно использовать не более пяти хэш-тегов');
  pristine.addValidator(hashtagsInput, validateHashtagDublicateInput, 'Хэш-теги не должны повторяться');

  uploadPhotoInput.addEventListener('change', () => showUploadPhoto());
  closeEditPhotoButton.addEventListener('click', () => closeUploadPhoto());

  uploadPhotoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
  });
};

export {setupFormValidation};
