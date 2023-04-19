import {getRandomInteger} from './utility.js';
import {createRandomIdFromRangeGenerator} from './utility.js';

const ID_MIN = 1;
const ID_MAX = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_ID_MIN = 0;
const COMMENT_ID_MAX = 50;
const PHOTOS_COUNT = 25;

const PHOTO_DESCRIPTIONS = [
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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => {
  const generateCommentId = createRandomIdFromRangeGenerator(COMMENT_ID_MIN, COMMENT_ID_MAX);
  const generateAvatarId = getRandomInteger(1, 6);

  return {
    id: generateCommentId(),
    avatar: `img/avatar-${generateAvatarId}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhotoDescription = () => {
  const generatePhotoId = createRandomIdFromRangeGenerator(ID_MIN, ID_MAX);
  const id = generatePhotoId();

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
    comments: Array.from(
      {length: getRandomInteger(1, 5)},
      createComment
    )
  };
};

const createPhotos = () =>
  Array.from({length: PHOTOS_COUNT}, () =>
    createPhotoDescription());

createPhotos();

export {createPhotos};
