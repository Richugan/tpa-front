import { Component } from '@angular/core';
import { Divider } from '../../misc/divider/divider';
import { PageCard, PageCardData } from '../../page-card/page-card';

@Component({
  selector: 'app-page-cards-block',
  imports: [Divider, PageCard],
  templateUrl: './page-cards-block.html',
  styleUrl: './page-cards-block.scss',
})
export class PageCardsBlock {
  pageCards: PageCardData[] = [
    {
      title: 'Corem ipsum dolor',
      description:
        'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link1',
    },
    {
      title: 'Jorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link2',
    },
    {
      title: 'Yorem ipsum dolor',
      description:
        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link3',
    },
    {
      title: 'Morem ipsum dolor',
      description:
        'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link4',
    },
    {
      title: 'Morem ipsum dolor',
      description:
        'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      image: '/images/pagecard.png',
      link: 'link5',
    },
  ];
}
