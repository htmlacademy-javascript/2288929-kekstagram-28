import {createPhotos} from './data.js';
import {renderPreviews} from './preview.js';
import './valid-img-form.js';

const usersPhotos = createPhotos();
renderPreviews(usersPhotos);
