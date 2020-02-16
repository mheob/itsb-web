import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { SocialModel } from "./social.model";

// TODO #27: Load some data from a database.
export const socialData: SocialModel = {
  links: [
    {
      href: "https://www.linkedin.com/in/itsb",
      title: "LinkedIn",
      icon: faLinkedin
    },
    {
      href: "https://github.com/ITS-Boehm",
      title: "GitHub",
      icon: faGithubSquare
    },
    {
      href: "https://twitter.com/itsboehm",
      title: "Twitter",
      icon: faTwitterSquare
    },
    {
      href: "https://fb.me/its.boehm",
      title: "Facebook",
      icon: faFacebookSquare
    },
    {
      href: "https://www.instagram.com/its_boehm/",
      title: "Instagram",
      icon: faInstagramSquare
    }
  ]
};
