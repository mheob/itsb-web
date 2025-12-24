import type { Contact } from '@/types/contact';
import { getAge } from '@/utils/date';

export const contactDataEN: Contact[] = [
  { definition: 'Name', content: 'Alexander Böhm' },
  { definition: 'Age', content: getAge(new Date(1982, 9, 21)).toString() },
  {
    definition: 'E-Mail',
    content: {
      prefix: 'mailto:',
      href: 'mail@alex-boehm.dev',
      title: 'Send me an email',
    },
  },
  {
    definition: 'Telefon',
    content: {
      prefix: 'tel:',
      href: '+49 160 8206654',
      title: 'Call me',
    },
  },
  { definition: 'Job', content: 'Freelancer' },
  { definition: 'Location', content: 'Neuwied, Germany' },
];

export const contactDataDE: Contact[] = [
  { definition: 'Name', content: 'Alexander Böhm' },
  { definition: 'Alter', content: getAge(new Date(1982, 9, 21)).toString() },
  {
    definition: 'E-Mail',
    content: {
      prefix: 'mailto:',
      href: 'mail@alex-boehm.dev',
      title: 'Schreib mir per E-Mail',
    },
  },
  {
    definition: 'Telefon',
    content: {
      prefix: 'tel:',
      href: '+49 160 8206654',
      title: 'Ruf mich einfach an',
    },
  },
  { definition: 'Job', content: 'Freelancer' },
  { definition: 'Standort', content: 'Neuwied, RLP' },
];
