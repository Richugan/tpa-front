import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

// Define an interface for the PageCard properties
// todo move to a separate file if needed
export interface PageCardData {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-page-card',
  imports: [RouterModule],
  templateUrl: './page-card.html',
  styleUrl: './page-card.scss',
})
export class PageCard {
  @Input()
  card!: PageCardData;
}
