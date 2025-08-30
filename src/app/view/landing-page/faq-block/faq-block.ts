import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq-block',
  imports: [],
  templateUrl: './faq-block.html',
  styleUrl: './faq-block.scss',
})
export class FaqBlock {
  mainColor = 'gray';

  // Set open: true for the one you want expanded by default
  faqItems: FaqItem[] = [
    {
      question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer:
        'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
      open: true,
    },
    {
      question: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: 'Short answer text goes here. You can put any HTML-safe content you like.',
    },
    {
      question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: 'Another short answer block. Keep it brief for visual parity.',
    },
    {
      question: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: 'Answer text for item 4.',
    },
    {
      question: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit?',
      answer: 'Answer text for item 5.',
    },
  ];

  // Allow only one open at a time (set to false if you want multi-open)
  singleOpen = false;

  toggle(i: number) {
    if (this.singleOpen) {
      this.faqItems = this.faqItems.map((item, idx) => ({
        ...item,
        open: idx === i ? !item.open : false,
      }));
    } else {
      this.faqItems[i].open = !this.faqItems[i].open;
    }
  }

  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }
}
