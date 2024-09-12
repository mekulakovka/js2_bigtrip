import {createElement} from '../render.js';

const createTripsListTemplate = () => 
  `
    <ul class="trip-events__list">
    </ul>
  `;

export default class TripsListView {
  getTemplate() {
    return createTripsListTemplate();
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