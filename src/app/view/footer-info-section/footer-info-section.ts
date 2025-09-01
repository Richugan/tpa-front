import { Component, signal } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { arrowToRightLogo } from '../misc/svgs/logos';

@Component({
  selector: 'app-footer-info-section',
  imports: [],
  templateUrl: './footer-info-section.html',
  styleUrl: './footer-info-section.scss',
})
export class FooterInfoSection {
  arrowToRightLogo: SafeHtml;

  constructor(protected sanitizer: DomSanitizer) {
    this.arrowToRightLogo = this.sanitizer.bypassSecurityTrustHtml(arrowToRightLogo);
  }
}
