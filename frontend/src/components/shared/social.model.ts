import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface SocialModel {
  links: Array<{
    href: string;
    title: string;
    icon: IconDefinition;
  }>;
}
