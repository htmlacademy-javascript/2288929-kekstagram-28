const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgInProcess = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const effectContainer = document.querySelector('.img-upload__effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const allFiltersButton = document.querySelectorAll('.effects__radio');
const STEP_CHANGE_SCALE_PERCENT = 25;

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

imgInProcess.style = 'transform: scale(1)';

noUiSlider.create(effectSlider, ALL_FILTERS.none);

const makeImgBigger = () => {
  const newValue = parseInt(scaleControl.value, 10) + STEP_CHANGE_SCALE_PERCENT;

  if (newValue <= 25) {
    scaleControl.value = '25%';
    imgInProcess.style.transform = 'scale(0.25)';
  } else if (newValue >= 100) {
    scaleControl.value = '100%';
    imgInProcess.style.transform = 'scale(1)';
  } else {
    scaleControl.value = `${newValue}%`;
    imgInProcess.style.transform = `scale(${newValue / 100})`;
  }
};

const makeImgSmaller = () => {
  const newValue = parseInt(scaleControl.value, 10) - STEP_CHANGE_SCALE_PERCENT;

  if (newValue <= 25) {
    scaleControl.value = '25%';
    imgInProcess.style.transform = 'scale(0.25)';
  } else if (newValue >= 100) {
    scaleControl.value = '100%';
    imgInProcess.style.transform = 'scale(1)';
  } else {
    scaleControl.value = `${newValue}%`;
    imgInProcess.style.transform = `scale(${newValue / 100})`;

  }
};

smallerButton.addEventListener('click', makeImgSmaller);

biggerButton.addEventListener('click', makeImgBigger);


const updateSliderParametr = () => {
  for (const filter of allFiltersButton) {
    effectSlider.noUiSlider.on('update', () => {
      const sliderValue = effectSlider.noUiSlider.get();
      effectLevel.value = sliderValue;
    });
    filter.addEventListener('change', (evt) => {
      if (evt.target.value === 'none') {
        effectContainer.classList.add('hidden');
        imgInProcess.className = '';
      } else {
        effectContainer.classList.remove('hidden');
        imgInProcess.className = '';
        imgInProcess.classList.add(`effects__preview--${evt.target.value}`);
        effectSlider.noUiSlider.updateOptions(ALL_FILTERS[evt.target.value]);
        const functionfilter = filterRules[evt.target.value](0.5);
        imgInProcess.style.filter = functionfilter;
      }
    });
  }
};

updateSliderParametr()
