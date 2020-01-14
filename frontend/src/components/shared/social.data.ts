import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { SocialModel } from "./social.model";

// TODO #27: Load some data from a database.
export const socialData: SocialModel = {
  links: [
    {
      href: "https://fb.me/its.boehm",
      title: "Facebook",
      icon: faFacebookSquare
    },
    {
      href: "https://twitter.com/itsboehm",
      title: "Twitter",
      icon: faTwitterSquare
    },
    {
      href: "https://www.instagram.com/its_boehm/",
      title: "Instagram",
      icon: faInstagram
    },
    {
      href: "https://github.com/ITS-Boehm",
      title: "GitHub",
      icon: faGithub
    },
    {
      href: "https://discord.me/itsb",
      title: "Discord",
      icon: faDiscord
    }
  ]
};
