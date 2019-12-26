import { LinkType } from "../../shared/ContactLink";

export interface ContactModel {
  definition: string;
  content: string | { type: LinkType; href: string; title: string };
}
