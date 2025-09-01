import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer-hero-section',
  imports: [],
  templateUrl: './footer-hero-section.html',
  styleUrl: './footer-hero-section.scss',
})
export class FooterHeroSection {
  mainColor = 'gray';

  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }
}
