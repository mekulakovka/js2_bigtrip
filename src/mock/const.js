const MAX_OFFERS_PER_EVENT = 3;

const BasePrice = {
  MIN: 0,
  MAX: 150
};

const isFavorite = [true, false];

const types = ["taxi", "bus", "train", "ship", "drive", "flight", "check-in", "sightseeing", "restaurant"];

const destinations =["Amsterdam", "Geneva", "Paris"];

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.';

const offersTitles = [
  "Add luggage",
  "Switch to comfort class", 
  "Add meal",
  "Choose seats",
  "Travel by train"
];

const offers = [
  { 
    name: "luggage",
    title: "Add luggage",
    price: 20    
  },
  { 
    name: "comfort",
    title: "Switch to comfort class",
    price: 10    
  },
  {
    name: "meal",
    title: "Add meal",
    price: 35    
  },
  {
    name: "seats",
    title: "Choose seats",
    price: 5    
  },
  {
    name: "train",
    title: "Travel by train",
    price: 40
  },
];

export {
  MAX_OFFERS_PER_EVENT,
  BasePrice,
  isFavorite,
  types,
  destinations,
  description,
  offersTitles,
  offers
}