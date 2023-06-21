import {createPhotos} from './data.js';
import {renderPreviews} from './preview.js';
import {setupFormValidation} from './form-validation.js';
import './img-effects.js';

const usersPhotos = createPhotos();
renderPreviews(usersPhotos);
setupFormValidation();
