import { Component } from '@angular/core';
import { Divider } from '../../misc/divider/divider';
import { PageCard } from '../../page-card/page-card';
import { RenderedWPPost } from '../../../data/rendered-wp-post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-cards-block',
  imports: [Divider, PageCard, RouterModule],
  templateUrl: './page-cards-block.html',
  styleUrl: './page-cards-block.scss',
})
export class PageCardsBlock {
  pageCards: RenderedWPPost[] = [
    {
      id: 0,
      title: 'Corem ipsum dolor',
      excerpt:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link1',
      alt: 'image',
      content: '',
      date: new Date().toString(),
    },
    {
      id: 1,
      title: 'Jorem ipsum dolor',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link2',
      alt: 'image',
      content: '',
      date: new Date().toString(),
    },
    {
      id: 2,
      title: 'Yorem ipsum dolor',
      excerpt:
        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link3',
      alt: 'image',
      content: '',
      date: new Date().toString(),
    },
    {
      id: 3,
      title: 'Morem ipsum dolor',
      excerpt:
        'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link4',
      alt: 'image',
      content: '',
      date: new Date().toString(),
    },
    {
      id: 4,
      title: 'Morem ipsum dolor',
      excerpt:
        'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link5',
      alt: 'image',
      content: '',
      date: new Date().toString(),
    },
  ];
}
