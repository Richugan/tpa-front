import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PageFooter } from './page-footer';

describe('PageFooter', () => {
  let fixture: ComponentFixture<PageFooter>;
  let component: PageFooter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(PageFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders footer columns', () => {
    const cols = fixture.debugElement.queryAll(By.css('.footer-links .column'));
    expect(cols.length).toBe(component.footerColumns.length);
  });
});

