import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlock } from './faq-block';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('FaqBlock', () => {
  let component: FaqBlock;
  let fixture: ComponentFixture<FaqBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBlock],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqBlock);
    component = fixture.componentInstance;

    component.faqItems = [
      { question: 'Q1', answer: 'A1', open: false },
      { question: 'Q2', answer: 'A2', open: false },
    ];

    fixture.detectChanges();
  });

  function firstItem() {
    return fixture.debugElement.queryAll(By.css('.faq-item'))[0];
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('hides the answer by default', () => {
    const answer = firstItem().query(By.css('.faq-a'));
    expect(answer).toBeNull();
  });

  it('shows the answer after first toggle click', () => {
    const head = firstItem().query(By.css('.faq-head'));
    head.triggerEventHandler('click');
    fixture.detectChanges();

    const answer = firstItem().query(By.css('.faq-a'));
    expect(answer).not.toBeNull();
    expect(answer!.nativeElement.textContent).toContain('A1');

    const aria = firstItem().query(By.css('.faq-head')).nativeElement.getAttribute('aria-expanded');
    expect(aria).toBe('true');
  });

  it('hides the answer after second toggle click', () => {
    const head = firstItem().query(By.css('.faq-head'));
    head.triggerEventHandler('click');
    fixture.detectChanges();

    head.triggerEventHandler('click');
    fixture.detectChanges();

    const answer = firstItem().query(By.css('.faq-a'));
    expect(answer).toBeNull();

    const aria = firstItem().query(By.css('.faq-head')).nativeElement.getAttribute('aria-expanded');
    expect(aria).toBe('false');
  });

  it('also toggles via the arrow button', () => {
    const arrow = firstItem().query(By.css('.faq-arrow'));
    arrow.triggerEventHandler('click');
    fixture.detectChanges();

    expect(firstItem().query(By.css('.faq-a'))).not.toBeNull();

    arrow.triggerEventHandler('click');
    fixture.detectChanges();

    expect(firstItem().query(By.css('.faq-a'))).toBeNull();
  });
});
