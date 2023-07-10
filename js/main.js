import {renderPreviews} from './preview.js';
import {setupFormValidation} from './form-validation.js';
import {initScaleControl, initSlider} from './img-effects.js';
import { getData } from './network.js';
import { showAlert } from './utility.js';

initScaleControl();
initSlider();

getData()
  .then((photos) => renderPreviews(photos))
  .catch((errorMessage) => showAlert(errorMessage));

setupFormValidation();
