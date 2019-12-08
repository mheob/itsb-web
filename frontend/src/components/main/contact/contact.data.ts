import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ContactModel } from "./contact.model";

export const serviceData: ContactModel[] = [
  {
    icon: faPhoneAlt,
    header: "Phone",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    anchor: {
      href: "tel:+491608206654",
      title: "Ruf mich einfach an",
      text: "+49 160 8206654"
    }
  },
  {
    icon: faEnvelope,
    header: "E-Mail",
    text: "Lorem ipsum dolor sit amet praesentium eaque eveniet!",
    anchor: {
      href: "mailto:ab@its-boehm.de",
      title: "Schreib mir per E-Mail",
      text: "ab@its-boehm.de"
    }
  }
];
