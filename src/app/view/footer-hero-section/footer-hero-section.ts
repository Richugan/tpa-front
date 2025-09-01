import { Component, signal } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { arrowToRightLogo } from '../misc/svgs/logos';

@Component({
  selector: 'app-footer-hero-section',
  imports: [],
  templateUrl: './footer-hero-section.html',
  styleUrl: './footer-hero-section.scss',
})
export class FooterHeroSection {
  arrowToRightLogo: SafeHtml;

  constructor(protected sanitizer: DomSanitizer) {
    this.arrowToRightLogo = this.sanitizer.bypassSecurityTrustHtml(arrowToRightLogo);
  }
}
