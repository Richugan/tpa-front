export interface WPPost {
  id: number;
  date: string;
  link: string;
  content: { rendered: string };
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: any;
}
