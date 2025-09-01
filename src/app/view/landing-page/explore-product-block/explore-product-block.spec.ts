import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductBlock } from './explore-product-block';
import { By } from '@angular/platform-browser';

describe('ExploreProductBlock', () => {
  let component: ExploreProductBlock;
  let fixture: ComponentFixture<ExploreProductBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreProductBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreProductBlock);
    component = fixture.componentInstance;

    component.productTabs = [
      {
        title: 'Overview',
        content: {
          image: 'a.jpg',
          heading: 'Overview heading',
          description: 'Overview desc',
          bullets: ['o1', 'o2'],
          ctaPrimary: 'Book A Discovery Call',
          ctaSecondary: 'View Case Study',
        },
      },
      {
        title: 'Details',
        content: {
          image: 'b.jpg',
          heading: 'Details heading',
          description: 'Details desc',
          bullets: ['d1'],
          ctaPrimary: 'Book A Discovery Call',
          ctaSecondary: 'View Case Study',
        },
      },
      {
        title: 'Pricing',
        content: {
          image: 'c.jpg',
          heading: 'Pricing heading',
          description: 'Pricing desc',
          bullets: [],
          ctaPrimary: 'Book A Discovery Call',
          ctaSecondary: 'View Case Study',
        },
      },
    ];

    // Start on the first tab
    component.activeTabIndex = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getTabButtons() {
    return fixture.debugElement.queryAll(By.css('button.tab'));
  }
  function getActiveHeadingText(): string {
    const el = fixture.debugElement.query(By.css('.product-info-header'));
    return (el?.nativeElement.textContent || '').trim();
  }
  function getActiveImageSrc(): string {
    const img = fixture.debugElement.query(By.css('.product-image img'));
    return img?.nativeElement.getAttribute('src') || '';
  }

  it('renders first tab by default', () => {
    expect(component.activeTabIndex).toBe(0);
    expect(getActiveHeadingText()).toContain('Overview heading');
    expect(getActiveImageSrc()).toContain('a.jpg');

    const [first, second] = getTabButtons();
    expect(first.nativeElement.classList).toContain('active');
    expect(second.nativeElement.classList).not.toContain('active');
  });

  it('switches to Details tab on click', async () => {
    const buttons = getTabButtons();
    // Click the second tab (index 1)
    buttons[1].triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.activeTabIndex).toBe(1);
    expect(getActiveHeadingText()).toContain('Details heading');
    expect(getActiveImageSrc()).toContain('b.jpg');

    expect(buttons[1].nativeElement.classList).toContain('active');
    expect(buttons[0].nativeElement.classList).not.toContain('active');
  });

  it('switches to Pricing tab on click', async () => {
    const buttons = getTabButtons();
    // Click the third tab (index 2)
    buttons[2].triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.activeTabIndex).toBe(2);
    expect(getActiveHeadingText()).toContain('Pricing heading');
    expect(getActiveImageSrc()).toContain('c.jpg');

    expect(buttons[2].nativeElement.classList).toContain('active');
    expect(buttons[0].nativeElement.classList).not.toContain('active');
  });

  it('calls setActiveTab with the right index', () => {
    spyOn(component, 'setActiveTab').and.callThrough();
    const buttons = getTabButtons();

    buttons[1].triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.setActiveTab).toHaveBeenCalledOnceWith(1);
  });
});
