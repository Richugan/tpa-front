import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { PageCard } from '../../page-card/page-card';
import { RenderedWPPost } from '../../../data/rendered-wp-post';
import { RouterModule } from '@angular/router';
import { PageCardsService } from '../../../data/page-cards.service';

@Component({
  selector: 'app-page-cards-block',
  imports: [PageCard, RouterModule],
  templateUrl: './page-cards-block.html',
  styleUrl: './page-cards-block.scss',
})
export class PageCardsBlock implements OnInit {
  pageCards: WritableSignal<RenderedWPPost[]> = signal<RenderedWPPost[]>([]);

  constructor(private pageCardsService: PageCardsService) {}

  ngOnInit(): void {
    this.pageCardsService.getPageCards().subscribe((cards) => this.pageCards.set(cards));
  }
}
