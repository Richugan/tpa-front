import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

beforeEach(() => {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    providers: [provideZonelessChangeDetection()],
  });
});
