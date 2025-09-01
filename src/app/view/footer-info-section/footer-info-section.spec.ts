import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterInfoSection } from './footer-info-section';

describe('FooterInfoSection', () => {
  let fixture: ComponentFixture<FooterInfoSection>;
  let component: FooterInfoSection;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterInfoSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterInfoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders call-to-action button', () => {
    expect(fixture.debugElement.query(By.css('.hero-actions .btn.btn-primary'))).not.toBeNull();
  });
});

