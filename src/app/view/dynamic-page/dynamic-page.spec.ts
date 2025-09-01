import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { DynamicPage } from './dynamic-page';
import { WPService, WPPostResponse } from '../../data/wp.service';
import { RenderedWPPost } from '../../data/rendered-wp-post';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('DynamicPage', () => {
  let fixture: ComponentFixture<DynamicPage>;
  let component: DynamicPage;

  let getPostsSpy: jasmine.Spy;
  let subjects: Subject<WPPostResponse>[];

  function makePost(id: number, title: string): RenderedWPPost {
    return {
      id,
      title,
      excerpt: `${title} excerpt`,
      content: '' as unknown as any,
      link: `/post/${id}`,
      date: new Date().toISOString(),
      image: `image-${id}.jpg`,
      alt: title,
    };
  }

  beforeEach(async () => {
    subjects = [];
    const mockWP = {
      getPosts: jasmine.createSpy('getPosts').and.callFake(() => {
        const s = new Subject<WPPostResponse>();
        subjects.push(s);
        return s.asObservable();
      }),
    } as Pick<WPService, 'getPosts'>;

    getPostsSpy = mockWP.getPosts as jasmine.Spy;

    await TestBed.configureTestingModule({
      imports: [DynamicPage, RouterModule.forRoot([])],
      providers: [provideZonelessChangeDetection(), { provide: WPService, useValue: mockWP }],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicPage);
    component = fixture.componentInstance;
  });

  it('creates and shows skeletons during loading, then renders posts', () => {
    fixture.detectChanges();

    const skeletons = fixture.debugElement.queryAll(By.css('.card.skeleton'));
    expect(skeletons.length).toBe(component.postsPerPage);

    // Resolve the first fetch
    subjects[0].next({
      posts: [makePost(1, 'A'), makePost(2, 'B')],
      total: 2,
      totalPages: 1,
    });
    subjects[0].complete();
    fixture.detectChanges();

    // Skeletons hidden, posts rendered
    expect(fixture.debugElement.queryAll(By.css('.card.skeleton')).length).toBe(0);
    const cards = fixture.debugElement.queryAll(By.css('app-page-card'));
    expect(cards.length).toBe(2);
  });

  it('shows "Not found" when the API returns no posts', () => {
    fixture.detectChanges();

    subjects[0].next({ posts: [], total: 0, totalPages: 0 });
    subjects[0].complete();
    fixture.detectChanges();

    const error = fixture.debugElement.query(By.css('.error'));
    expect(error).not.toBeNull();
    expect(error!.nativeElement.textContent).toContain('Not found');
  });

  it('paginates via the pager buttons and updates page info', () => {
    fixture.detectChanges();

    // Initial page 1 of 3 with 2 posts
    subjects[0].next({
      posts: [makePost(1, 'P1'), makePost(2, 'P2')],
      total: 6,
      totalPages: 3,
    });
    subjects[0].complete();
    fixture.detectChanges();

    const [prevBtn, nextBtn] = fixture.debugElement.queryAll(By.css('.pager .btn'));
    const pageInfo = fixture.debugElement.query(By.css('.pager .pageinfo'));

    expect(pageInfo.nativeElement.textContent).toContain('1');
    expect(pageInfo.nativeElement.textContent).toContain('3');
    expect(prevBtn.nativeElement.disabled).toBeTrue();
    expect(nextBtn.nativeElement.disabled).toBeFalse();

    // Go to page 2
    nextBtn.triggerEventHandler('click');
    fixture.detectChanges();

    // Second fetch for page 2
    subjects[1].next({
      posts: [makePost(3, 'P3'), makePost(4, 'P4')],
      total: 6,
      totalPages: 3,
    });
    subjects[1].complete();
    fixture.detectChanges();

    const pageInfo2 = fixture.debugElement.query(By.css('.pager .pageinfo'));
    expect(pageInfo2.nativeElement.textContent).toContain('2');
    expect(pageInfo2.nativeElement.textContent).toContain('3');
  });

  it('setPage clamps within [1, totalPages]', () => {
    // Seed initial fetch to exit loading state
    fixture.detectChanges();
    subjects[0].next({ posts: [makePost(1, 'A')], total: 1, totalPages: 3 });
    subjects[0].complete();
    fixture.detectChanges();

    component.totalPages.set(3);

    component.setPage(-10);
    expect(component.page()).toBe(1);

    component.setPage(999);
    expect(component.page()).toBe(3);
  });

  it('submitSearch updates search and resets page to 1 (triggers new fetch)', () => {
    fixture.detectChanges();

    // Finish first call
    subjects[0].next({ posts: [makePost(1, 'A')], total: 1, totalPages: 1 });
    subjects[0].complete();
    fixture.detectChanges();

    // Trigger search
    component.submitSearch('hello');
    fixture.detectChanges();

    // A new subject should have been created for the new fetch
    expect(getPostsSpy.calls.count()).toBeGreaterThanOrEqual(2);

    const lastArgs = getPostsSpy.calls.mostRecent().args[0];
    expect(lastArgs.search).toBe('hello');
    expect(lastArgs.page).toBe(1);
  });
});
