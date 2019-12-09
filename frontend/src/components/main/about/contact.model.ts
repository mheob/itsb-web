export interface ContactModel {
  title: string;
  content: string | { href: string; title: string; text: string };
}
