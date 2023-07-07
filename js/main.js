//import {createPhotos} from './data.js';
import {renderPreviews} from './preview.js';
import {setupFormValidation} from './form-validation.js';
import './img-effects.js';
import {initScaleControl} from './img-effects.js';
import { initSlider } from './img-effects.js';
import {closeUploadPhoto} from './form-validation.js';
import {showAlert} from './utility.js';
import './network.js';


//const usersPhotos = createPhotos();
//renderPreviews(usersPhotos);

initScaleControl();
initSlider();

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    showAlert('Не удалось получить данные с сервера');
  })
  .then((photos) => {
    renderPreviews(photos);
  });

setupFormValidation(closeUploadPhoto);

