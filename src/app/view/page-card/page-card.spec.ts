import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PageCard } from './page-card';
import { RenderedWPPost } from '../../data/rendered-wp-post';

describe('PageCard', () => {
  let fixture: ComponentFixture<PageCard>;
  let component: PageCard;

  function makeCard(): RenderedWPPost {
    return {
      id: 42,
      title: 'Sample Title',
      excerpt: 'Sample Excerpt',
      content: '' as unknown as any,
      link: '/post/42',
      date: new Date().toISOString(),
      image: '/images/sample.jpg',
      alt: 'sample',
    };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCard);
    component = fixture.componentInstance;
    component.card = makeCard();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders image and text from the card', () => {
    const img = fixture.debugElement.query(By.css('.image img'));
    expect(img.nativeElement.getAttribute('src')).toContain('/images/sample.jpg');
    const title = fixture.debugElement.query(By.css('.info .title'));
    expect((title.nativeElement.textContent || '').trim()).toContain('Sample Title');
    const desc = fixture.debugElement.query(By.css('.info .description'));
    expect((desc.nativeElement.textContent || '').trim()).toContain('Sample Excerpt');
  });
});

