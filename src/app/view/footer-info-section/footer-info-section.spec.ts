import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterInfoSection } from './footer-info-section';

describe('FooterInfoSection', () => {
  let component: FooterInfoSection;
  let fixture: ComponentFixture<FooterInfoSection>;

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
});
