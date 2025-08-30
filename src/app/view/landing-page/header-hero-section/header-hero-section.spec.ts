import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHeroSection } from './header-hero-section';

describe('FooterHeroSection', () => {
  let component: FooterHeroSection;
  let fixture: ComponentFixture<FooterHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterHeroSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterHeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
