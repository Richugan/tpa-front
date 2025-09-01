import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderInfoSection } from './header-info-section';

describe('HeaderInfoSection', () => {
  let fixture: ComponentFixture<HeaderInfoSection>;
  let component: HeaderInfoSection;

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

  it('renders primary CTA', () => {
    expect(fixture.debugElement.query(By.css('.hero-actions .btn.btn-primary'))).not.toBeNull();
  });
});

