import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ContactModel } from "./contact.model";

// TODO: Add Discord to the contact section. See issue #6.
export const serviceData: ContactModel[] = [
  {
    icon: faPhoneAlt,
    header: "Phone",
    text: "Ruf mich an oder nutze einen der standard Messenger-Dienste.",
    anchor: {
      href: "tel:+491608206654",
      title: "Ruf mich einfach an",
      text: "+49 160 8206654"
    }
  },
  {
    icon: faEnvelope,
    header: "E-Mail",
    text: "Schreib mir eine Nachricht und ich werde mich zeitnah zurückmelden.",
    anchor: {
      href: "mailto:ab@its-boehm.de",
      title: "Schreib mir per E-Mail",
      text: "ab@its-boehm.de"
    }
  }
];
