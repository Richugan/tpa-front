import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface FaqItem {
  question: string;
  answer: string;
  open?: boolean;
}

@Injectable({ providedIn: 'root' })
export class FaqService {
  // Mocked FAQ data; replace with API call when available
  getFaqItems(): Observable<FaqItem[]> {
    // Emit asynchronously to avoid ExpressionChangedAfterItHasBeenCheckedError
    return of([
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
    ]).pipe(delay(0));
  }
}
