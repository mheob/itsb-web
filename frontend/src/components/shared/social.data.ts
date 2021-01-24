import { faFreeCodeCamp, faGithub, faLinkedin, faTwitter, faWordpress } from "@fortawesome/free-brands-svg-icons";

import { SocialModel } from "./social.model";

// TODO #27: Load some data from a database.
export const socialData: SocialModel = {
  links: [
    {
      href: "https://www.linkedin.com/in/itsb",
      title: "LinkedIn",
      icon: faLinkedin,
    },
    {
      href: "https://github.com/mheob",
      title: "GitHub",
      icon: faGithub,
    },
    {
      href: "https://twitter.com/mheob_a",
      title: "Twitter",
      icon: faTwitter,
    },
    {
      href: "https://profiles.wordpress.org/mheob/",
      title: "Wordpress",
      icon: faWordpress,
    },
    {
      href: "https://www.freecodecamp.org/mheob",
      title: "freeCodeCamp",
      icon: faFreeCodeCamp,
    },
  ],
};
