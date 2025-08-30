import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductBlock } from './explore-product-block';

describe('ExploreProductBlock', () => {
  let component: ExploreProductBlock;
  let fixture: ComponentFixture<ExploreProductBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreProductBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreProductBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
