import { Component } from '@angular/core';
import { FooterHeroSection } from '../footer-hero-section/footer-hero-section';
import { FormsModule } from '@angular/forms';

interface FooterLink {
  title: string;
  url: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-page-footer',
  imports: [FormsModule],
  templateUrl: './page-footer.html',
  styleUrl: './page-footer.scss',
})
export class PageFooter {
  mainColor = 'gray';

  footerColumns: FooterColumn[] = [
    {
      title: 'Solutions',
      links: [
        { title: 'Yorem', url: '' },
        { title: 'Vorem', url: '' },
        { title: 'Corem', url: '' },
        { title: 'Sorem', url: '' },
        { title: 'Norem', url: '' },
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'Jorem', url: '' },
        { title: 'Lorem', url: '' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Vorem', url: '' },
        { title: 'Borem', url: '' },
        { title: 'Yorem', url: '' },
        { title: 'Horem', url: '' },
        { title: 'Norem', url: '' },
      ],
    },
    {
      title: 'Insight',
      links: [
        { title: 'Jorem', url: '' },
        { title: 'Morem', url: '' },
        { title: 'Forem', url: '' },
        { title: 'Jorem', url: '' },
        { title: 'Corem', url: '' },
      ],
    },
  ];

  email: string = '';

  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }

  submitEmail() {
    console.log('Submitted email:', this.email);
    // Add logic for actual submission
  }
}
