import { ContactModel } from "./contact.model";
import { age } from "../../../utils/calculations";

export const contactData: ContactModel[] = [
  { title: "Name", content: "Alexander Böhm" },
  { title: "Alter", content: age(new Date(1982, 9, 21)).toString() },
  {
    title: "E-Mail",
    content: {
      href: "mailto:ab@its-boehm.de",
      title: "Schreib mir per E-Mail",
      text: "ab@its-boehm.de"
    }
  },
  {
    title: "Telefon",
    content: {
      href: "tel:+491608206654",
      title: "Ruf mich einfach an",
      text: "+49 160 8206654"
    }
  },
  { title: "Job", content: "Freelancer" },
  { title: "Standort", content: "Neuwied, RLP" }
];
