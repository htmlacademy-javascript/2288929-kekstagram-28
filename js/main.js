import {createPhotos} from './data.js';
import {renderPreviews} from './preview.js';
import {setupFormValidation} from './form-validation.js';
import './img-effects.js';
import {initScaleControl} from './img-effects.js';
import { initSlider } from './img-effects.js';


const usersPhotos = createPhotos();
renderPreviews(usersPhotos);
setupFormValidation();
initScaleControl();
initSlider();
