import {createElement} from '../render.js';
import {
  getRandomValue, 
  getRandomInteger,
  getDate,
  getDateInDMYHMFormat,  
} from '../utils.js';
import {
  MAX_OFFERS_PER_EVENT,
  types,
  offers,
  destinations,
  description
} from '../mock/const.js';


const createFormEditEventTemplate = () => {
  const currentEventType = getRandomValue(types);
  const currentEventCity = getRandomValue(destinations);

  const getTypesList = () => {
    let typesList = '';

    const isChecked = (type) => (type === currentEventType) ? `checked` : ``;
      
    types.forEach((type, index) => {
      typesList += 
        `<div class="event__type-item">
            <input ${isChecked(type)} id="event-type-${index}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
            <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${index}">${type}</label>
        </div>`;
    });
    
    return typesList;
  };

  const getOffersList = () => {
    let offersList = ``;

    const isChecked = (offer) => (!offer) ? `checked` : ``;

    if (offers.length > 0) {
      offers.forEach((offer, index) => {        
        offersList +=
          `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.name}-${index}" type="checkbox" name="${offer.name}" ${isChecked(offer)}>
            <label class="event__offer-label" for="event-offer-${offer.name}-${index}">
              <span class="event__offer-title">${offer.title}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${offer.price}</span>
            </label>
          </div>`;
      });
    } else return '';

    return offersList;
  };

  const getDestinationsList = () => {
    let destinationsList = ``;
    
    destinations.forEach((point) => {
      destinationsList += `<option value="${point}">${point}</option>`;
    });

    return destinationsList;
  };

  const getPicturesList = () => {
    let picturesList = ``;  
    const picturesAmount = getRandomInteger(0,7);

    for(let i=1; i < picturesAmount; i++) {
      picturesList += `<img class="event__photo" src="img/photos/${i}.jpg" alt="Event photo">`;
    }

    return picturesList;
  };

  return (
  `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${currentEventType}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${getTypesList()}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${currentEventType}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${currentEventCity}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${getDestinationsList()}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">          
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getDateInDMYHMFormat(getDate(), `DD/MM/YY HH:mm`)}">
            —
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getDateInDMYHMFormat(getDate(), `DD/MM/YY HH:mm`)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              € ${getRandomInteger(1, 150)}
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${getOffersList()}              
            </div>
          </section>

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>

            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${getPicturesList()}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>
  `
  );
};

export default class FormEditEventView {
  getTemplate() {
    return createFormEditEventTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}