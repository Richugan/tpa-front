import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailed } from './blog-detailed';

describe('BlogDetailed', () => {
  let component: BlogDetailed;
  let fixture: ComponentFixture<BlogDetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
