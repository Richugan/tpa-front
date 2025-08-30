import { Component } from '@angular/core';
import { Divider } from '../../misc/divider/divider';

interface ProductTab {
  title: string;
  content: {
    heading: string;
    description: string;
    bullets: string[];
    image: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

@Component({
  selector: 'app-explore-product-block',
  imports: [Divider],
  templateUrl: './explore-product-block.html',
  styleUrl: './explore-product-block.scss',
})
export class ExploreProductBlock {
  mainColor = 'gray';

  activeTabIndex = 0;

  productTabs: ProductTab[] = [
    {
      title: 'Lorem ipsum',
      content: {
        heading: 'Jorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
        bullets: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        image: '/images/product1.png',
        ctaPrimary: 'Book A Discovery Call',
        ctaSecondary: 'View Case Study',
      },
    },
    {
      title: 'Corem ipsum dolor',
      content: {
        heading: 'Another Product Title',
        description: 'Description for corem ipsum dolor product.',
        bullets: ['Feature one for corem.', 'Feature two for corem.', 'Feature three for corem.'],
        image: '/images/product2.png',
        ctaPrimary: 'Book A Discovery Call',
        ctaSecondary: '',
      },
    },
    {
      title: 'Forem ipsum',
      content: {
        heading: 'Third Product Heading',
        description: 'Description for forem ipsum product.',
        bullets: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
        image: '/images/product3.png',
        ctaPrimary: 'Book A Discovery Call',
        ctaSecondary: '',
      },
    },
  ];

  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}
