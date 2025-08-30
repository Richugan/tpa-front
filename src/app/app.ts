import { provideHttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './view/page-header/page-header';
import { CommonModule } from '@angular/common';
import { PageFooter } from './view/page-footer/page-footer';
import { FooterHeroSection } from './view/footer-hero-section/footer-hero-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageHeader, PageFooter, FooterHeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    this.getColorsFromBackend();
  }

  //emitated function to fetch colors from backend
  getColorsFromBackend() {
    const blackColor = '#231F20';
    const whiteColor = '#FFFCFF';
    const grayColor = '#D8DBE2';
    const darkGrayColor = '#666';
    const mainColor = '#00ab80';
    const hoveredMainColor = '#33bc99';
    const secondaryColor = '#c3ff00';

    document.body.style.setProperty('--blackColor', blackColor);
    document.body.style.setProperty('--whiteColor', whiteColor);
    document.body.style.setProperty('--grayColor', grayColor);
    document.body.style.setProperty('--darkGrayColor', darkGrayColor);
    document.body.style.setProperty('--mainColor', mainColor);
    document.body.style.setProperty('--mainHoverColor', hoveredMainColor);
    document.body.style.setProperty('--lightGreenColor', secondaryColor);
  }
}
