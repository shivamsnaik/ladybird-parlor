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
    {service: 'eyebrow1', price: 30},
    {service: 'eyebrow2', price: 20},
    {service: 'eyebrow3', price: 40},
    {service: 'eyebrow4', price: 60},
  ],
  waxing: [
    {service: 'waxing1', price: 300},
    {service: 'waxing2', price: 200},
    {service: 'waxing3', price: 400},
    {service: 'waxing4', price: 600},
  ],
  facial: [
    {service: 'facial1', price: 350},
    {service: 'facial2', price: 250},
    {service: 'facial3', price: 450},
    {service: 'facial4', price: 650},
  ],
};