import { Component } from '@angular/core';

@Component({
  selector: 'app-header-hero-section',
  imports: [],
  templateUrl: './header-hero-section.html',
  styleUrl: './header-hero-section.scss',
})
export class HeaderHeroSection {
  mainColor = 'gray';

  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }
}
