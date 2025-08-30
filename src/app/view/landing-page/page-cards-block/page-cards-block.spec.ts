import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardsBlock } from './page-cards-block';

describe('PageCardsBlock', () => {
  let component: PageCardsBlock;
  let fixture: ComponentFixture<PageCardsBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCardsBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCardsBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
