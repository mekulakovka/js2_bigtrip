import SortView from '../view/sort-view.js';
import TripsListView from '../view/trip-events-list-view.js';
import TripItemView from '../view/trip-event-item-view.js';
import FormAddEventView from '../view/form-add-event-view.js';
import FormEditEventView from '../view/form-edit-event-view.js';

import {render} from '../render.js';

const TEMP_TRIPS_COUNTER = 3;

export default class EventsPresenter {
  sortComponent = new SortView();
  tripListContainerComponent = new TripsListView();
  FormAddEventComponent = new FormAddEventView();
  FormEditEventComponent = new FormEditEventView();

  init = (container) => {
    this.container = container;

    render(this.sortComponent, this.container);
    render(this.tripListContainerComponent, this.container);
    render(this.FormAddEventComponent, this.tripListContainerComponent.getElement());
    //render(this.FormEditEventComponent, this.tripListContainerComponent.getElement());

    for (let i = 0; i < TEMP_TRIPS_COUNTER; i++) {
      render( new TripItemView(), this.tripListContainerComponent.getElement());
    }
  }; 

}