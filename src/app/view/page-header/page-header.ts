import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dropdownIcon, logoIcon, userLogo } from '../misc/svgs/logos';

class NavLink {
  id: number;
  label: string;
  hasDropdown: boolean;
  url: string;
  children: NavLink[] = [];

  constructor(id: number, label: string, url: string, hasDropdown: boolean, children: []) {
    this.id = id;
    this.label = label;
    this.url = url;
    this.hasDropdown = hasDropdown;
    this.children = children;
  }
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

  navLinks: NavLink[] = [
    new NavLink(0, 'Landing Page', '/', true, []),
    new NavLink(1, 'Dynamic Page', '/dynamic', true, []),
    new NavLink(2, 'Resources', '/', true, []),
    new NavLink(3, 'Learn', '/', true, []),
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.dropdownIcon = this.sanitizer.bypassSecurityTrustHtml(dropdownIcon);
    this.logoIcon = this.sanitizer.bypassSecurityTrustHtml(logoIcon);
    this.userLogoIcon = this.sanitizer.bypassSecurityTrustHtml(userLogo);
  }
}
