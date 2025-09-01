import { Component, OnInit } from '@angular/core';
import { HeaderInfoSection } from './header-info-section/header-info-section';
import { ExploreProductBlock } from './explore-product-block/explore-product-block';
import { WPService } from '../../data/wp.service';
import { PageCardsBlock } from './page-cards-block/page-cards-block';
import { FaqBlock } from './faq-block/faq-block';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderInfoSection, ExploreProductBlock, PageCardsBlock, FaqBlock],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
