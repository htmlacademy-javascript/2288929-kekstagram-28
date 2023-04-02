
import {createPhoto} from './data.js';

const userPhotosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const usersPhotosFragment = document.createDocumentFragment();

const usersPhotos = createPhoto();

usersPhotos.forEach(({url, likes, comments}) => {
  const userPhotoTemplete = photoTemplate.cloneNode(true);

  userPhotoTemplete.querySelector('.picture__img').src = url;
  userPhotoTemplete.querySelector('.picture__likes').textContent = likes;
  userPhotoTemplete.querySelector('.picture__comments').length.textContent = comments;
  usersPhotosFragment.appendChild(userPhotoTemplete);

});

userPhotosList.append(usersPhotosFragment);
