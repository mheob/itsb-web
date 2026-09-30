import hofImage from '@/images/itsb-boehm-hof-alexander.webp';
import petryImage from '@/images/itsb-boehm-petry-stephan.webp';

import type { Testimonial } from '../types/testimonial';

export const testimonialDataEN: Testimonial[] = [
	{
		company: 'Chairperson, TSG Irlich',
		image: hofImage,
		name: 'Alexander Hof',
		quote:
			'No one in our association had any idea about websites or computers in general. We are glad to have Alex in our ranks.',
	},
	{
		company: 'Chairperson, HSV Neuwied',
		image: petryImage,
		name: 'Stephan Petry',
		quote:
			'Whether it was the design at the beginning or the technical support now, Alex is always reliable. And the response times are excellent too.',
	},
];

export const testimonialDataDE: Testimonial[] = [
	{
		company: 'Vorsitzender, TSG Irlich',
		image: hofImage,
		name: 'Alexander Hof',
		quote:
			'Bei uns im Verein hatte keiner eine Ahnung von Webseiten oder auch Computer im Allgemeinen. Wir sind froh den Alex in unseren Reihen zu wissen.',
	},
	{
		company: 'Vorsitzender, HSV Neuwied',
		image: petryImage,
		name: 'Stephan Petry',
		quote:
			'Egal ob es das Design am Anfang war oder der technische Support aktuell: Auf den Alex ist immer Verlasst. Und auch die Reaktionszeiten sind top.',
	},
];
