/* Первая функция
Javascript должен проверять длинну строки, сравнивать её с заданным значением
и возвращать true если условие выполняется и false если нет
*/

const checkStringLength = (string, length) => string.length <= length;

checkStringLength('Шла Саша по шоссе', 25);


/*Вторая функция
JS должен проверять совпадают ли символы при прямом и обратном прочтение строки,
если совпадают возвращать true, иначе false*/

const isWordPalindrome = (string) => {
  for (let i = 1; i <= string.length; i++) {
    string = string.toLowerCase();
    if (string[i - 1] === (string[String.length - i])) {
      continue;
    }
    return false;
  }
  return true;
};

isWordPalindrome('ТопОт');


//Вторая функция с усложнением на пробелы

const isPhrasePolindrom = (deleteSpacePhrase) => {
  deleteSpacePhrase = deleteSpacePhrase
    .toLowerCase()
    .replaceAll(' ','');
  const ReversePhase = deleteSpacePhrase
    .split('')
    .reverse()
    .join('');
  return ReversePhase === deleteSpacePhrase;
};

isPhrasePolindrom('Лёша на полке клопа нашёл ');

//Третья функция с извлечением числа из строки
const extractNumber = (string) => {
  let someString = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      someString += string.at(i);
    }
  }
  return parseInt(someString, 10);
};

extractNumber('агент 007');

// Четвертая функция с добавлением новой строки к строке с ограничением длинны
const addSymbols = (string, minLength, symbols) => {
  const actualLength = minLength - string.length;
  if (actualLength <= 0) {
    return string;
  }
  const tempSymbols = symbols.slice(0, actualLength % symbols.length);
  const tempRepeat = symbols.repeat(actualLength / symbols.length);
  return tempSymbols + tempRepeat + string;
};
addSymbols('абвгде', 4, '12345678910');
