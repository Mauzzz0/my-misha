const name = 'Ruslan';

let translatedName;

switch (name) {
  case 'Ruslan':
    translatedName = 'Руслан';
    break;

  case 'Mikhail':
    translatedName = 'Михаил';
    break;

  case 'Yuliya':
  case 'Yuliia':
  case 'Yulya':
    translatedName = 'Юлия';
    break;

  default:
    translatedName = 'Неизвестное имя';
    break;
}

console.log(translatedName);

// if (name === 'Ruslan') {
//   translatedName = 'Руслан';
// } else if (name === 'Mikhail') {
//   translatedName = 'Михаил'
// } else if (name === 'Yuliya') {
//   translatedName = 'Юлия';
// } else if (name === 'Yuliia') {
//   translatedName = 'Юлия';
// } else if (name === 'Yulya') {
//   translatedName = 'Юлия';
// } else {
//   translatedName = 'Неизвестное имя';
// }
//
// console.log(translatedName);
