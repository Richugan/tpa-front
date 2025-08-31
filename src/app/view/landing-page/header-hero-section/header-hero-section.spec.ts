import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderHeroSection } from './header-hero-section';

describe('HeaderHeroSection', () => {
  let component: HeaderHeroSection;
  let fixture: ComponentFixture<HeaderHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHeroSection],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderHeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
