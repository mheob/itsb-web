import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { ContactModel } from "./contact.model";
import { LinkType } from "../../shared/ContactLink";

// TODO #27: Load some data from a database.
export const serviceData: ContactModel[] = [
  {
    icon: faPhoneAlt,
    header: "Phone",
    text: "Ruf mich an oder nutze einen der standard Messenger-Dienste.",
    anchor: {
      href: "+49 160 8206654",
      title: "Ruf mich einfach an.",
      text: "+49 160 8206654",
      type: LinkType.PHONE
    }
  },
  {
    icon: faDiscord,
    header: "Discord",
    text: "Support und Anfragen können auch per Discord besprochen werden.",
    anchor: {
      href: "https://discord.me/itsb",
      title: "Nutze Discord als Dienst für Instant Messaging, Chat, Sprachkonferenzen und Videokonferenzen.",
      text: "discord.me/itsb",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  {
    icon: faEnvelope,
    header: "E-Mail",
    text: "Schreib mir eine Nachricht und ich werde mich zeitnah zurückmelden.",
    anchor: {
      href: "ab@its-boehm.de",
      title: "Schreib mir per E-Mail.",
      text: "ab@its-boehm.de",
      type: LinkType.EMAIL
    }
  }
];
