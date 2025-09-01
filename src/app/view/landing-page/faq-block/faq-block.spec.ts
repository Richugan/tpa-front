import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { FaqBlock } from './faq-block';
import { FaqItem, FaqService } from '../../../data/faq.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FaqBlock', () => {
  let fixture: ComponentFixture<FaqBlock>;
  let component: FaqBlock;
  let subject: Subject<FaqItem[]>;

  function items(): FaqItem[] {
    return [
      { question: 'Q1', answer: 'A1', open: true },
      { question: 'Q2', answer: 'A2' },
      { question: 'Q3', answer: 'A3' },
    ];
  }

  beforeEach(async () => {
    subject = new Subject<FaqItem[]>();
    const mockSvc = {
      getFaqItems: jasmine.createSpy('getFaqItems').and.returnValue(subject.asObservable()),
    } as Pick<FaqService, 'getFaqItems'> as any;

    await TestBed.configureTestingModule({
      imports: [FaqBlock],
      providers: [provideZonelessChangeDetection(), { provide: FaqService, useValue: mockSvc }],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqBlock);
    component = fixture.componentInstance;

    // Start lifecycle (subscribes to service)
    fixture.detectChanges();

    // Provide initial data async
    subject.next(items());
    fixture.detectChanges();
  });

  it('renders items from the service and respects open state', () => {
    const els = fixture.debugElement.queryAll(By.css('.faq-item'));
    expect(els.length).toBe(3);

    // First should be open from data
    expect(els[0].nativeElement.classList.contains('open')).toBeTrue();
    // Only one body present initially
    const bodies = fixture.debugElement.queryAll(By.css('.faq-body'));
    expect(bodies.length).toBe(1);
    expect(bodies[0].nativeElement.textContent).toContain('A1');
  });

  it('toggles an item when header is clicked', () => {
    const item2 = fixture.debugElement.queryAll(By.css('.faq-item'))[1];
    const head2 = item2.query(By.css('.faq-head'));

    // Initially closed
    expect(item2.nativeElement.classList.contains('open')).toBeFalse();

    head2.nativeElement.click();
    fixture.detectChanges();
    expect(item2.nativeElement.classList.contains('open')).toBeTrue();

    // Clicking again closes it
    head2.nativeElement.click();
    fixture.detectChanges();
    expect(item2.nativeElement.classList.contains('open')).toBeFalse();
  });

  it('enforces single open mode when enabled', () => {
    // Enable single-open behavior
    component.singleOpen = true;
    fixture.detectChanges();

    const itemsEls = fixture.debugElement.queryAll(By.css('.faq-item'));
    const head1 = itemsEls[0].query(By.css('.faq-head'));
    const head3 = itemsEls[2].query(By.css('.faq-head'));

    // First is open from initial data
    expect(itemsEls[0].nativeElement.classList.contains('open')).toBeTrue();

    // Open third
    head3.nativeElement.click();
    fixture.detectChanges();

    expect(itemsEls[2].nativeElement.classList.contains('open')).toBeTrue();
    expect(itemsEls[0].nativeElement.classList.contains('open')).toBeFalse();

    // Open first again, third should close
    head1.nativeElement.click();
    fixture.detectChanges();

    expect(itemsEls[0].nativeElement.classList.contains('open')).toBeTrue();
    expect(itemsEls[2].nativeElement.classList.contains('open')).toBeFalse();
  });
});
