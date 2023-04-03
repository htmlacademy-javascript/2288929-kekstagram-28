import {createPhotos} from './data.js';
import {renderPreviews} from './preview.js';

const usersPhotos = createPhotos();
renderPreviews(usersPhotos);
