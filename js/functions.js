/* Первая функция
Javascript должен проверять длинну строки, сравнивать её с заданным значением
и возвращать true если условие выполняется и false если нет
*/

const checkStringLength = (string, length) => string.length <= length;

checkStringLength('Шла Саша по шоссе', 25);


/*Вторая функция
JS должен проверять совпадают ли символы при прямом и обратном прочтение строки,
если совпадают возвращать true, иначе false*/

const isPolindrom = (string) => {
  const formatted = string
    .toLowerCase()
    .replace(/\s+/g, '');
  const reversePhase = formatted
    .split('')
    .reverse()
    .join('');
  return reversePhase === formatted;
};

isPolindrom('Лёша на полке клопа нашёл ');

//Третья функция с извлечением числа из строки
const parseNumbers = (string) => {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

parseNumbers('агент 007');

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
