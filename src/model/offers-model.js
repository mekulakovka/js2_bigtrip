import {generateOffers} from '../mock/offer.js';
/*
export default class OffersModel {
  offers = generateOffers();

  get = () => this.offers;
}
*/
export default class OffersModel {
  eventsModel = null;
  allOffers = [];
  offers = [];

  constructor(eventsModel) {
    this.eventsModel = eventsModel;
    this.generateAllOffers();
  }

  generateAllOffers() {
    this.allOffers = generateOffers(this.eventsModel.get());
  }

  get = (event) => {
    this.offers = event.offers.map((offerId) =>
      this.allOffers.find((offer) =>
        offer.id === offerId)
    );

    return this.offers;
  };
}