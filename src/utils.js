import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomValue = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const getDate = () => {
  const date = new Date();
  return date.toISOString();
};

const getDateInDHMFormat = (date) => dayjs(date).format('MMM D');
const getDateInHHMMormat = (date) => dayjs(date).format('HH:mm');
const getDateInDMYHMFormat = (date, format = `MMMM D`) => (date !== null) ? dayjs(date).format(format) : '';


//ВРЕМЕННАЯ ФУНКЦИЯ ДЛЯ РАССЧЕТА ДЛИНЫ ТРИПА
//годный репозиторий для подсматривания функций
//https://github.com/labutinK/BigTrip/blob/master/src/utils/date.js
const getDateDiff = (dateFrom, dateTo) => {
  const MINUTES_PER_HOUR = 60;

  const firstDate = dayjs('2018-06-25 12:25');
  const secondDate = dayjs('2018-06-25 10:20');

  const minutes = (firstDate.diff(secondDate, 'm'));

  return (minutes < MINUTES_PER_HOUR)
    ? `${minutes}M`
    : `0${Math.floor(minutes / MINUTES_PER_HOUR)}H ${minutes % MINUTES_PER_HOUR}M`; //учесть если будет часов больше чем 9, убрать 0
  
}

export {
  getRandomInteger,
  getRandomValue,
  getDate,
  getDateInDHMFormat,
  getDateInHHMMormat,
  getDateInDMYHMFormat,  
  getDateDiff, 
};
