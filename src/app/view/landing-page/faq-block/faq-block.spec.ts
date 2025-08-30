import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlock } from './faq-block';

describe('FaqBlock', () => {
  let component: FaqBlock;
  let fixture: ComponentFixture<FaqBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
