import TripInfoView from './view/trip-info-view.js';
import TripFiltersView from './view/trip-filters-view.js';

import {render} from './render.js';

import EventsPresenter from './presenter/events-presenter.js';

const bodyElement = document.querySelector('body');
const tripMainElement = bodyElement.querySelector('.trip-main');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter();

render(new TripInfoView(), tripMainElement, 'afterbegin');
render(new TripFiltersView(), tripFiltersElement);

eventsPresenter.init(tripEventsElement);