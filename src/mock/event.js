import {getRandomInteger, getRandomValue, getDate} from '../utils.js';
import {EVENTS_COUNTER} from '../const.js';
import {
  MAX_OFFERS_PER_EVENT,
  BasePrice,
  isFavorite,
  types,
  destinations,
  description
} from './const.js';

const generateEvent = () => ({
  basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
  dateFrom: getDate(),
  dateTo: getDate(),
  destination:{
    description,
    name: getRandomValue(destinations),
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?r=' + getRandomInteger(),
        description: "Chamonix parliament building"
      }
    ]
  },
  isFavorite: getRandomValue(isFavorite),
  offers: Array.from(
    {length: getRandomInteger(1, MAX_OFFERS_PER_EVENT)}, (_value, index) => getRandomInteger(1, 10)
  ),
  type: getRandomValue(types),
});

const generateEvents = () => {  
  const events = Array.from({length: EVENTS_COUNTER}, generateEvent);

  let totalOffersCount = 0;

  return events.map((event, index) => {
    const hasOffers = getRandomInteger(0, 1);

    const eventOfferCount = (hasOffers)
      ? getRandomInteger(1, MAX_OFFERS_PER_EVENT)
      : 0;

    totalOffersCount += eventOfferCount;

    return {
      offers: (hasOffers)
        ? Array.from({length: eventOfferCount},
          (_value, offerIndex) => String(totalOffersCount - offerIndex)
        )
        : [],
      eventInfo: event,
    };
  });
};


export {generateEvents}