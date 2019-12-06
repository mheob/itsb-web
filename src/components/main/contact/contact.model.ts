import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface ContactModel {
  icon: IconDefinition;
  header: string;
  text: string;
  anchor: {
    href: string;
    title: string;
    text: string;
  };
}
