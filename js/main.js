const ID_MIN = 1;
const ID_MAX = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_ID_MIN = 0;
const COMMENT_ID_MAX = 999999;

const FOTO_DESCRIPTIONS = [
  'Густой хвойный лес',
  'Белоснежные горы',
  'Бухта с лодками',
  'Поле с пшеницей',
  'Зеленые холмы с редким кустарником',
  'Заснеженные хрустящим снегом тропинки',
  'Морские пейзажи',
  'Свежие фрукты, овощи и ягоды',
  'Ясное морозное небо',
  'Солнечное утро',
  'Красивые стебли высоких кудрявых папоротников',
  'Осенний пейзаж',
  'Листва на березах',
  'Холодное лепетанье поздней осени','Лазурь, ясная и ласковая'
];

const MESSAGES = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Ivan',
  'Марья',
  'Глаша',
  'user001',
  'Alen Де Лонов',
  'СССР БУДЕТ ВОЗРАЖДЕН!!1',
  'Oxy',
  'Прически для животных Ленина 42',
  'Сергей_Георгиевич_62',
  'Ansastasia Kipr',
  'Главный',
  'Дешёвый СММ Кемерово',
  '50CENT',
];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
};

const GetRundomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)]
};

const createPhotoDescription = () => {
  const generatePhotoId = createRandomIdFromRangeGenerator(ID_MIN, ID_MAX);
  const generateUrlId = createRandomIdFromRangeGenerator(ID_MIN, ID_MAX);
  const generateLikeNumbers = getRandomInteger(LIKE_MIN, LIKE_MAX);
  const generateCommentId = createRandomIdFromRangeGenerator(COMMENT_ID_MIN, COMMENT_ID_MAX);
  const generateAvatarId = getRandomInteger(1, 6);

  return {
    id: generatePhotoId(),
    url: 'photos/' + generateUrlId() + '.jpg',
    description: GetRundomArrayElement(FOTO_DESCRIPTIONS),
    likes: generateLikeNumbers,
    comments: [{
      id: generateCommentId(),
      avatar: 'img/avatar-' + generateAvatarId + '.svg',
      message: GetRundomArrayElement(MESSAGES),
      name: GetRundomArrayElement(NAMES),
    }]
  };
};

const photoDescription = Array.from({length: 25}, createPhotoDescription);


