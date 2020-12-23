import {
   CARD_COLOR_1,
   CARD_COLOR_2,
   CARD_COLOR_3,
   CARD_COLOR_4,
   CARD_COLOR_5,
   CARD_COLOR_6,
} from './constants';

export const SpecialOffers = [
  {name: '30% off on Facial', cardColor: CARD_COLOR_1},
  {name: 'As a special customer,\n 100% off on everything.', cardColor: CARD_COLOR_2},
  {name: 'Just kidding.\nAap nahi sudhrenge', cardColor: CARD_COLOR_3},
  {name: 'Kripiya details neeche', cardColor: CARD_COLOR_4},
  {name: 'Check kare', cardColor: CARD_COLOR_5},
  {name: 'Thankyou', cardColor: CARD_COLOR_6},
];

export const Services = [
  {_id: 0, name: 'Eyebrows', service_identifier: 'eyebrow'},
  {_id: 1, name: 'Waxing', service_identifier: 'waxing'},
  {_id: 2, name: 'Facial', service_identifier: 'facial'},
];

export const ServiceDetails = {
  eyebrow: [
    {service: 'Eyebrows 1', price: 30},
    {service: 'Eyebrows 2', price: 20},
    {service: 'Eyebrows 3', price: 40},
    {service: 'Eyebrows 4', price: 60},
  ],
  waxing: [
    {service: 'Waxing 1', price: 300},
    {service: 'Waxing 2', price: 200},
    {service: 'Waxing 3', price: 400},
    {service: 'Waxing 4', price: 600},
  ],
  facial: [
    {service: 'Facial 1', price: 350},
    {service: 'Facial 2', price: 250},
    {service: 'Facial 3', price: 450},
    {service: 'Facial 4', price: 650},
  ],
};