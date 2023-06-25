const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgInProcess = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const effectContainer = document.querySelector('.img-upload__effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectButtons = document.querySelectorAll('.effects__radio');
const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;

const ALL_FILTERS = {
  none:{
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    unit: '',
    connect: 'lower',
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    unit: '',
    connect: 'lower',
  },
  sepia:{
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    unit: '',
    connect: 'lower',
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    unit: '%',
    connect: 'lower',
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    unit: 'px',
    connect: 'lower',
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    unit: '',
    connect: 'lower',
  }
};


const filterRules = {
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`,
};

const onBiggerButtonClick = () => {
  let newValue = parseInt(scaleControl.value, 10) + SCALE_STEP;

  if (newValue >= MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleControl.value = `${newValue}%`;
  imgInProcess.style.transform = `scale(${newValue / 100})`;
};

const onSmallerButtonClick = () => {
  let newValue = parseInt(scaleControl.value, 10) - SCALE_STEP;

  if (newValue <= MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleControl.value = `${newValue}%`;
  imgInProcess.style.transform = `scale(${newValue / 100})`;
};

const onEffectButtonChange = (evt) => {
  imgInProcess.className = '';

  if (evt.target.value === 'none') {
    effectContainer.classList.add('hidden');
    imgInProcess.style = '';

    return;
  }
  effectContainer.classList.remove('hidden');
  imgInProcess.classList.add(`effects__preview--${evt.target.value}`);
  effectSlider.noUiSlider.updateOptions(ALL_FILTERS[evt.target.value]);
  effectSlider.noUiSlider.on('update', () => {
    const sliderValue = effectSlider.noUiSlider.get();
    effectLevel.value = sliderValue;
    imgInProcess.style.filter = filterRules[evt.target.value](sliderValue);
  });
};


const initSlider = () => {
  noUiSlider.create(effectSlider, ALL_FILTERS.none);
  effectContainer.classList.add('hidden');

  effectButtons.forEach((effectButton) => {
    effectButton.addEventListener('change', onEffectButtonChange);
  });
};

export const resetScale = () => {
  scaleControl.value = `${MAX_SCALE}%`;
  imgInProcess.style.transform = `scale(${MAX_SCALE / 100})`;
};

export const resetFilter = () => {
  imgInProcess.style = '';
};

export const initScaleControl = () => {
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};

export { initSlider };
