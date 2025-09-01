import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dropdownIcon, companyLogoIcon, userLogo, sideMenuIcon } from '../misc/svgs/logos';

interface NavLink {
  id: number;
  label: string;
  url: string;
  children: NavLink[];
}

@Component({
  selector: 'app-page-header',
  imports: [CommonModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  navigateToHome() {
    window.location.href = '/';
  }

  dropdownIcon: SafeHtml;
  logoIcon: SafeHtml;
  userLogoIcon: SafeHtml;
  sideMenuIcon: SafeHtml;

  navLinks: NavLink[] = [
    { id: 0, label: 'Landing Page', url: '/', children: [] },
    { id: 1, label: 'Dynamic Page', url: '/dynamic', children: [] },
    { id: 2, label: 'Resources', url: '/', children: [] },
    { id: 3, label: 'Learn', url: '/', children: [] },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.dropdownIcon = this.sanitizer.bypassSecurityTrustHtml(dropdownIcon);
    this.logoIcon = this.sanitizer.bypassSecurityTrustHtml(companyLogoIcon);
    this.userLogoIcon = this.sanitizer.bypassSecurityTrustHtml(userLogo);
    this.sideMenuIcon = this.sanitizer.bypassSecurityTrustHtml(sideMenuIcon);
  }
}
