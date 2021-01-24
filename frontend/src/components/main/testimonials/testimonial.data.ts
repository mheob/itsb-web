/* eslint-disable max-len */
import { TestimonialModel } from './testimonial.model';

// TODO #27: Load some data from a database.
export const testimonialData: TestimonialModel[] = [
  {
    quote:
      'Bei uns im Verein hatte keiner eine Ahnung von Webseiten oder auch Computer im Allgemeinen. Wir sind froh den Alex in unseren Reihen zu wissen.',
    name: 'Frank Driesch',
    company: 'Vorsitzender, TSG Irlich',
    imgSource: 'itsb-boehm-driesch-frank',
  },
  {
    quote:
      'Egal ob es das Design am Anfang war oder der technische Support aktuell: Auf den Alex ist immer Verlasst. Und auch die Reaktionszeiten sind top.',
    name: 'Stephan Petry',
    company: 'Vorsitzender, HSV Neuwied',
    imgSource: 'itsb-boehm-petry-stephan',
  },
];
