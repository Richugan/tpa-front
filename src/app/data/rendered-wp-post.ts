import { SafeHtml } from '@angular/platform-browser';

interface RenderedAuthor {
  name: string;
  avatarURL: string;
}
interface RenderedHero {
  sourceURL: string;
  altTitle: string;
}

export interface RenderedWPPost {
  id: number;
  date: string;
  link: string;
  content: SafeHtml;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  author?: RenderedAuthor;
  hero?: RenderedHero;
}
