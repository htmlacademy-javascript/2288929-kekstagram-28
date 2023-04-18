const bigPicture = document.querySelector('.big-picture');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyDocument = document.querySelector('body');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const commentIist = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');


const showPreview = () => {
  bigPicture.classList.remove('hidden');
  bodyDocument.classList.add('modal-open');
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};


const closePreview = () => {
  bigPicture.classList.add('hidden');
  bodyDocument.classList.remove('modal-open');
  commentsCounter.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
};


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePreview();
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};


const renderComments = (comments) => {
  const commentFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const userCommentsTemplate = commentItem.cloneNode(true);
    commentIist.innerHTML = '';
    userCommentsTemplate.querySelector('.social__picture').src = comment.avatar;
    userCommentsTemplate.querySelector('.social__picture').alt = comment.name;
    userCommentsTemplate.querySelector('.social__text').textContent = comment.message;
    commentFragment.appendChild(userCommentsTemplate);
  });

  commentIist.append(commentFragment);
};


const renderBigPicture = (photo) => {
  showPreview();
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  renderComments(photo.comments);

  document.addEventListener('keydown', onDocumentKeydown);
};


closeBigPicture.addEventListener('click', () => {
  closePreview();
  document.removeEventListener('keydown', onDocumentKeydown);
});


export {renderBigPicture};
