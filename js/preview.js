const userPhotosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPreviews = (photos) => {
  const photosFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const userPhotoTemplate = photoTemplate.cloneNode(true);

    userPhotoTemplate.querySelector('.picture__img').src = url;
    userPhotoTemplate.querySelector('.picture__likes').textContent = likes;
    userPhotoTemplate.querySelector('.picture__comments').textContent = comments.length;
    photosFragment.appendChild(userPhotoTemplate);
  });

  userPhotosList.append(photosFragment);
};

export {renderPreviews};
