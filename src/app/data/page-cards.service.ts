import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RenderedWPPost } from './rendered-wp-post';

@Injectable({ providedIn: 'root' })
export class PageCardsService {
  // Mocked page cards; replace with API integration when ready
  getPageCards(): Observable<RenderedWPPost[]> {
    const now = new Date().toString();
    // Emit asynchronously to keep initial change detection stable
    return of([
      {
        id: 1,
        title: 'Corem ipsum dolor',
        excerpt:
          'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: '/images/pagecard.png',
        link: 'link1',
        alt: 'image',
        content: '' as any,
        date: now,
      },
      {
        id: 1,
        title: 'Jorem ipsum dolor',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: '/images/pagecard.png',
        link: 'link2',
        alt: 'image',
        content: '' as any,
        date: now,
      },
      {
        id: 1,
        title: 'Yorem ipsum dolor',
        excerpt:
          'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: '/images/pagecard.png',
        link: 'link3',
        alt: 'image',
        content: '' as any,
        date: now,
      },
      {
        id: 1,
        title: 'Morem ipsum dolor',
        excerpt:
          'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: '/images/pagecard.png',
        link: 'link4',
        alt: 'image',
        content: '' as any,
        date: now,
      },
      {
        id: 1,
        title: 'Morem ipsum dolor',
        excerpt:
          'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image: '/images/pagecard.png',
        link: 'link5',
        alt: 'image',
        content: '' as any,
        date: now,
      },
    ]).pipe(delay(0));
  }
}
