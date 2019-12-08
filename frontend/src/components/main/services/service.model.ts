import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface ServiceModel {
  icon: IconDefinition;
  header: string;
  text: string;
  num?: string;
}
