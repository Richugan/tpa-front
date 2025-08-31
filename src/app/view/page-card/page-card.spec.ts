import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCard } from './page-card';

describe('PageCard', () => {
  let component: PageCard;
  let fixture: ComponentFixture<PageCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCard);
    component = fixture.componentInstance;

    component.card = {
      id: 1,
      date: '2023-01-01T00:00:00',
      link: 'https://example.com/post/1',
      content: { rendered: '<p>Test content</p>' },
      title: 'test title',
      excerpt: 'test excerpt',
      author: {
        avatarURL: 'test avatar',
        name: 'test name',
      },
      alt: 'alt',
      image: 'img',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
