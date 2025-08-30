import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RenderedWPPost } from '../../data/rendered-wp-post';
import { CommonModule } from '@angular/common';

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
}
