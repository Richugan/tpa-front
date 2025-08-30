import { Component } from '@angular/core';
import { Divider } from '../../misc/divider/divider';

@Component({
  selector: 'app-header-hero-section',
  imports: [Divider],
  templateUrl: './header-hero-section.html',
  styleUrl: './header-hero-section.scss',
})
export class HeaderHeroSection {
  mainColor = 'gray';

  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }
}
