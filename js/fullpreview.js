const bigPicture = document.querySelector('.big-picture');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyDocument = document.querySelector('body');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const commentList = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureSacialCaption = bigPicture.querySelector('.social__caption');


const closePreview = () => {
  bigPicture.classList.add('hidden');
  bodyDocument.classList.remove('modal-open');
  commentsCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePreview();
  }
}

const renderComments = (comments) => {
  const commentFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const userCommentsTemplate = commentItem.cloneNode(true);
    commentList.innerHTML = '';
    userCommentsTemplate.querySelector('.social__picture').src = comment.avatar;
    userCommentsTemplate.querySelector('.social__picture').alt = comment.name;
    userCommentsTemplate.querySelector('.social__text').textContent = comment.message;
    commentFragment.appendChild(userCommentsTemplate);
  });

  commentList.append(commentFragment);
};

const renderBigPicture = (photo) => {
  bigPictureImg.src = photo.url;
  bigPictureLikesCount.textContent = photo.likes;
  bigPictureCommentsCount.textContent = photo.length;
  bigPictureSacialCaption.textContent = photo.description;
  renderComments(photo.comments);
};

const showPreview = (photo) => {
  bigPicture.classList.remove('hidden');
  bodyDocument.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderBigPicture(photo);
};

closeBigPicture.addEventListener('click', () => {
  closePreview();
});


export {showPreview};
