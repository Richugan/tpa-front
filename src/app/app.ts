import { provideHttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './view/page-header/page-header';
import { CommonModule } from '@angular/common';
import { PageFooter } from './view/page-footer/page-footer';
import { FooterHeroSection } from './view/footer-hero-section/footer-hero-section';
import {
  BLACK_COLOR,
  DARK_GRAY_COLOR,
  GRAY_COLOR,
  HOVERE_MAIN_COLOR as HOVERED_MAIN_COLOR,
  MAIN_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from './view/misc/colors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageHeader, PageFooter, FooterHeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    this.setBodyColors();
  }

  setBodyColors() {
    document.body.style.setProperty('--blackColor', BLACK_COLOR);
    document.body.style.setProperty('--whiteColor', WHITE_COLOR);
    document.body.style.setProperty('--grayColor', GRAY_COLOR);
    document.body.style.setProperty('--darkGrayColor', DARK_GRAY_COLOR);
    document.body.style.setProperty('--mainColor', MAIN_COLOR);
    document.body.style.setProperty('--mainHoverColor', HOVERED_MAIN_COLOR);
    document.body.style.setProperty('--lightGreenColor', SECONDARY_COLOR);
  }
}
