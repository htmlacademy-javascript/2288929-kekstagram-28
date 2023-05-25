import {createPhotos} from './data.js';
import {renderPreviews} from './preview.js';
import './form-validation.js';

const usersPhotos = createPhotos();
renderPreviews(usersPhotos);
