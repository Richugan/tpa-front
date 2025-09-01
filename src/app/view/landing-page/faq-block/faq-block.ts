import { Component, OnInit, inject, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dropdownIcon } from '../../misc/svgs/logos';
import { FaqItem, FaqService } from '../../../data/faq.service';

@Component({
  selector: 'app-faq-block',
  imports: [],
  templateUrl: './faq-block.html',
  styleUrl: './faq-block.scss',
})
export class FaqBlock implements OnInit {
  mainColor = 'gray';

  // Items are provided by the service
  faqItems: WritableSignal<FaqItem[]> = signal<FaqItem[]>([]);

  // Allow only one open at a time (set to false if you want multi-open)
  singleOpen = false;

  toggle(i: number) {
    this.faqItems.update((items) => {
      if (this.singleOpen) {
        const targetOpen = !items[i]?.open;
        return items.map((item, idx) => ({ ...item, open: idx === i ? targetOpen : false }));
      }
      return items.map((item, idx) => (idx === i ? { ...item, open: !item.open } : item));
    });
  }

  dropdownIcon: SafeHtml;
  constructor(protected sanitizer: DomSanitizer, private faqService: FaqService) {
    this.dropdownIcon = this.sanitizer.bypassSecurityTrustHtml(dropdownIcon);
  }

  ngOnInit(): void {
    // Subscribe asynchronously and set signal value; avoids NG0100 since it happens post-initial check
    this.faqService.getFaqItems().subscribe((items) => this.faqItems.set(items));
  }
}
