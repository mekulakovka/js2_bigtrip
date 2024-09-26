import {generateEvents} from '../mock/event.js';

export default class EventsModel {
  events = generateEvents();

  get = () => this.events;
}