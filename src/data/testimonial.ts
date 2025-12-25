import hofImage from '@/images/itsb-boehm-hof-alexander.webp';
import petryImage from '@/images/itsb-boehm-petry-stephan.webp';
import type { Testimonial } from '../types/testimonial';

export const testimonialDataEN: Testimonial[] = [
	{
		quote:
			'No one in our association had any idea about websites or computers in general. We are glad to have Alex in our ranks.',
		name: 'Alexander Hof',
		company: 'Chairperson, TSG Irlich',
		image: hofImage,
	},
	{
		quote:
			'Whether it was the design at the beginning or the technical support now, Alex is always reliable. And the response times are excellent too.',
		name: 'Stephan Petry',
		company: 'Chairperson, HSV Neuwied',
		image: petryImage,
	},
];

export const testimonialDataDE: Testimonial[] = [
	{
		quote:
			'Bei uns im Verein hatte keiner eine Ahnung von Webseiten oder auch Computer im Allgemeinen. Wir sind froh den Alex in unseren Reihen zu wissen.',
		name: 'Alexander Hof',
		company: 'Vorsitzender, TSG Irlich',
		image: hofImage,
	},
	{
		quote:
			'Egal ob es das Design am Anfang war oder der technische Support aktuell: Auf den Alex ist immer Verlasst. Und auch die Reaktionszeiten sind top.',
		name: 'Stephan Petry',
		company: 'Vorsitzender, HSV Neuwied',
		image: petryImage,
	},
];
