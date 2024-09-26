import {getRandomInteger, getRandomValue} from '../utils.js';
import {offersTitles} from './const.js';

const generateOffer = () => ({
  title: getRandomValue(offersTitles),
  price: getRandomInteger(10, 50)
});

const getOfferCount = (events) => events.reduce(
  (count, event) => count + event.offers.length, 0
);

const generateOffers = (events) => {
  const offerCount = getOfferCount(events);
  //console.log(offerCount);

  return Array.from({length: offerCount}, (_value, index) => {
    const offerItem = generateOffer();

    return {
      id: String(index + 1),
      ...offerItem,
    };
  });
};

export {generateOffers}

/*
const generateOffers = () => {  
  //const offers = Array.from({length: getRandomInteger(1, 5)}, generateOffer);

  return offers;
};
*/