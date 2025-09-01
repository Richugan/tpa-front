import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LandingPage } from './landing-page';
import { FaqService } from '../../data/faq.service';
import { PageCardsService } from '../../data/page-cards.service';
import { of } from 'rxjs';

describe('LandingPage', () => {
  let fixture: ComponentFixture<LandingPage>;
  let component: LandingPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage],
      providers: [
        { provide: FaqService, useValue: { getFaqItems: () => of([]) } },
        { provide: PageCardsService, useValue: { getPageCards: () => of([]) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the major sections', () => {
    expect(fixture.debugElement.query(By.css('app-header-info-section'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('app-explore-product-block'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('app-page-cards-block'))).not.toBeNull();
    expect(fixture.debugElement.query(By.css('app-faq-block'))).not.toBeNull();
  });
});

