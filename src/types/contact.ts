export interface Contact {
  definition: string;
  content: string | { prefix: LinkPrefix; href: string; title: string };
}

export type LinkPrefix = 'mailto:' | 'tel:';
