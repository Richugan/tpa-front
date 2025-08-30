import { Component, OnInit } from '@angular/core';
import { HeaderHeroSection } from './header-hero-section/header-hero-section';
import { ExploreProductBlock } from './explore-product-block/explore-product-block';
import { WPService } from '../../data/wp.service';
import { PageCardsBlock } from './page-cards-block/page-cards-block';
import { FaqBlock } from './faq-block/faq-block';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderHeroSection, ExploreProductBlock, PageCardsBlock, FaqBlock],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit {
  constructor(private wpService: WPService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.wpService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }
}
