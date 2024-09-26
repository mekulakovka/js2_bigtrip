import SortView from '../view/sort-view.js';
import TripsListView from '../view/trip-events-list-view.js';
import TripItemView from '../view/trip-event-item-view.js';
import FormEditEventView from '../view/form-edit-event-view.js';

import {render} from '../render.js';

export default class EventsPresenter {
  sortComponent = new SortView();
  tripListContainerComponent = new TripsListView();

  init = (container, eventsModel, offersModel) => {
    this.container = container;
    this.eventsModel = eventsModel;
    this.offersModel = offersModel;

    this.events = [...eventsModel.get()];

    render(this.sortComponent, this.container);
    render(this.tripListContainerComponent, this.container);        

    const offerslist = [...this.offersModel.get(this.events[0])];

    render( new FormEditEventView(), this.tripListContainerComponent.getElement());

    for (let i = 0; i < this.events.length; i++) {
      render( new TripItemView(this.events[i], offerslist), this.tripListContainerComponent.getElement());
    }

  }

}