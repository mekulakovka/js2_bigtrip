const createOfferTemplate = ({title, price}) =>
  `
    <li class="event__offer">
      <span class="event__offer-title">${title}</span>
      +€&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>
  `;

export const createOffersListTemplate = (offers) =>
  `
    <ul class="event__selected-offers">
      ${offers.map(createOfferTemplate).join('')}
    </ul>
  `;
