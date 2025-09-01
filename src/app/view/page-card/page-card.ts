import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RenderedWPPost } from '../../data/rendered-wp-post';
import { CommonModule } from '@angular/common';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { arrowToRightLogo } from '../misc/svgs/logos';

// Define an interface for the PageCard properties
// todo move to a separate file if needed

@Component({
  selector: 'app-page-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './page-card.html',
  styleUrl: './page-card.scss',
})
export class PageCard {
  @Input()
  card!: RenderedWPPost;

  arrowToRightLogo: SafeHtml;

  constructor(protected sanitizer: DomSanitizer) {
    this.arrowToRightLogo = this.sanitizer.bypassSecurityTrustHtml(arrowToRightLogo);
  }
}
