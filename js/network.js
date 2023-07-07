
import {showAlert} from './utility.js';

const successMessage = document.querySelector('#success').content.querySelector('div');
const errorMessage = document.querySelector('#error').content.querySelector('div');
const successButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');

const successPostPhoto = () => {
  document.body.append(successMessage);
};

const errorPostPhoto = () => {
  document.body.append(errorMessage);
};

const getData = () => fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    showAlert('Не удалось получить данные с сервера');
  });


const sendData = (body) => fetch('https://28.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });


export {successPostPhoto, errorPostPhoto, getData, sendData};
