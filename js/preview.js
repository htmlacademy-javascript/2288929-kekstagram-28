import {showPreview} from './fullpreview.js';
const userPhotosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPreviews = (photos) => {
  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const userPhotoTemplate = photoTemplate.cloneNode(true);

    userPhotoTemplate.querySelector('.picture__img').src = photo.url;
    userPhotoTemplate.querySelector('.picture__likes').textContent = photo.likes;
    userPhotoTemplate.querySelector('.picture__comments').textContent = photo.comments.length;
    userPhotoTemplate.addEventListener('click', () => {
      showPreview(photo);
    });
    photosFragment.appendChild(userPhotoTemplate);
  });

  userPhotosList.append(photosFragment);
};

export {renderPreviews};
