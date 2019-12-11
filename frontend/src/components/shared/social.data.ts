import { faFacebookSquare, faTwitterSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { SocialModel } from "./social.model";

// TODO: Correct the social links array. See issue #5.
export const socialData: SocialModel = {
  links: [
    {
      href: "#!",
      title: "Facebook",
      icon: faFacebookSquare
    },
    {
      href: "#!",
      title: "Twitter",
      icon: faTwitterSquare
    },
    {
      href: "#!",
      title: "Instagram",
      icon: faInstagram
    },
    {
      href: "#!",
      title: "LinkedIn",
      icon: faLinkedin
    }
  ]
};
