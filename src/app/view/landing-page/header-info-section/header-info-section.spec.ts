import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderInfoSection } from './header-info-section';

describe('HeaderHeroSection', () => {
  let component: HeaderInfoSection;
  let fixture: ComponentFixture<HeaderInfoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInfoSection],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderInfoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
