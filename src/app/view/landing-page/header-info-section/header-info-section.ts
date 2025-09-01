import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { arrowToRightLogo } from '../../misc/svgs/logos';

@Component({
  selector: 'app-header-info-section',
  imports: [],
  templateUrl: './header-info-section.html',
  styleUrl: './header-info-section.scss',
})
export class HeaderInfoSection {
  arrowToRightLogo: SafeHtml;

  constructor(protected sanitizer: DomSanitizer) {
    this.arrowToRightLogo = this.sanitizer.bypassSecurityTrustHtml(arrowToRightLogo);
  }
}
