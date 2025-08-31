import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardsBlock } from './page-cards-block';
import { RouterModule } from '@angular/router';

describe('PageCardsBlock', () => {
  let component: PageCardsBlock;
  let fixture: ComponentFixture<PageCardsBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCardsBlock, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCardsBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
