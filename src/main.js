import TripInfoView from './view/trip-info-view.js';
import TripFiltersView from './view/trip-filters-view.js';

import EventsPresenter from './presenter/events-presenter.js';
import EventsModel from './model/events-model.js';
import OffersModel from './model/offers-model.js';

import {render} from './render.js';

const eventsModel = new EventsModel();
const offersModel = new OffersModel(eventsModel);

/*
import {generateEvents} from './mock/event.js';
const events = generateEvents();
console.log(events);
//console.log('Id оферов' + events.offers);

import {generateOffers} from './mock/offer.js';
const offers = generateOffers(events);
console.log(offers); */


const bodyElement = document.querySelector('body');
const tripMainElement = bodyElement.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter();

render(new TripInfoView(), tripMainElement, 'afterbegin');
render(new TripFiltersView(), tripFiltersElement);

eventsPresenter.init(tripEventsElement, eventsModel, offersModel);