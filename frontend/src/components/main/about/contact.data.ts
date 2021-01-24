import { ContactModel } from './contact.model';
import { LinkType } from '../../shared/ContactLink';
import { age } from '../../../utils/calculations';

// TODO #27: Load some data from a database.
export const contactData: ContactModel[] = [
  { definition: 'Name', content: 'Alexander Böhm' },
  { definition: 'Alter', content: age(new Date(1982, 9, 21)).toString() },
  {
    definition: 'E-Mail',
    content: {
      type: LinkType.EMAIL,
      href: 'ab@its-boehm.de',
      title: 'Schreib mir per E-Mail',
    },
  },
  {
    definition: 'Telefon',
    content: {
      type: LinkType.PHONE,
      href: '+49 160 8206654',
      title: 'Ruf mich einfach an',
    },
  },
  { definition: 'Job', content: 'Freelancer' },
  { definition: 'Standort', content: 'Neuwied, RLP' },
];
