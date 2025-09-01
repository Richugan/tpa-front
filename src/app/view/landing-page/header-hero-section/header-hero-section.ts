import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { arrowToRightLogo } from '../../misc/svgs/logos';

@Component({
  selector: 'app-header-hero-section',
  imports: [],
  templateUrl: './header-hero-section.html',
  styleUrl: './header-hero-section.scss',
})
export class HeaderHeroSection {
  arrowToRightLogo: SafeHtml;

  constructor(protected sanitizer: DomSanitizer) {
    this.arrowToRightLogo = this.sanitizer.bypassSecurityTrustHtml(arrowToRightLogo);
  }
}
