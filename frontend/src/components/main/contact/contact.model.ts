import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

import { LinkType } from "../../shared/ContactLink";

export interface ContactModel {
  icon: IconDefinition;
  header: string;
  text: string;
  anchor: {
    href: string;
    title: string;
    text: string;
    target?: string;
    type?: LinkType;
  };
}
