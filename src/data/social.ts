export interface SocialMediaLink {
  href: string;
  title: string;
  icon: string;
}

export const socialData: SocialMediaLink[] = [
  {
    href: 'https://www.linkedin.com/in/itsb',
    title: 'LinkedIn',
    icon: "fa6-brands:linkedin",
  },
  {
    href: 'https://github.com/mheob',
    title: 'GitHub',
    icon: "fa6-brands:github",
  },
  {
    href: 'https://twitter.com/mheob_a',
    title: 'Twitter',
    icon: "fa6-brands:x-twitter",
  },
  {
    href: 'https://profiles.wordpress.org/mheob/',
    title: 'Wordpress',
    icon: "fa6-brands:wordpress",
  },
  {
    href: 'https://www.freecodecamp.org/mheob',
    title: 'freeCodeCamp',
    icon: "fa6-brands:free-code-camp",
  },
];
