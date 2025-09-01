import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

import { BlogDetailed } from './blog-detailed';
import { ActivatedRoute } from '@angular/router';
import { WPService } from '../../../data/wp.service';
import { RenderedWPPost } from '../../../data/rendered-wp-post';

describe('BlogDetailed', () => {
  let fixture: ComponentFixture<BlogDetailed>;
  let component: BlogDetailed;
  let postSubject: Subject<RenderedWPPost>;

  function makePost(title: string): RenderedWPPost {
    return {
      id: 1,
      title,
      excerpt: 'e',
      content: '' as unknown as any,
      link: '/post/1',
      date: new Date().toISOString(),
      image: '',
      alt: '',
      author: { name: 'Author', avatarURL: '' },
    };
  }

  beforeEach(async () => {
    postSubject = new Subject<RenderedWPPost>();

    await TestBed.configureTestingModule({
      imports: [BlogDetailed, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: new Map([['id', '1']]) } } },
        { provide: WPService, useValue: { getPost: () => postSubject.asObservable() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows loading then renders post title', () => {
    // While loading
    expect(component.loading()).toBeTrue();
    const loading = fixture.debugElement.query(By.css('.state'));
    expect(loading).not.toBeNull();

    // Emit post
    postSubject.next(makePost('Hello'));
    postSubject.complete();
    fixture.detectChanges();

    expect(component.loading()).toBeFalse();
    const title = fixture.debugElement.query(By.css('.hero-title .title'));
    expect((title.nativeElement.textContent || '').trim()).toContain('Hello');
  });

  it('sets error message when request fails', () => {
    postSubject.next(makePost('error'));
    postSubject.error(new Error('boom'));
    fixture.detectChanges();
    const error = fixture.debugElement.query(By.css('.state.error'));
    expect(error).not.toBeNull();
  });
});
