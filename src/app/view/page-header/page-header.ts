import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dropdownIcon, companyLogoIcon, userLogo, sideMenuIcon } from '../misc/svgs/logos';

interface NavLink {
  id: number;
  label: string;
  url: string;
  children?: NavLink[];
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
    {
      id: 0,
      label: 'Landing Page',
      url: '/',
      children: [
        { id: 100, label: 'Overview', url: '/' },
        { id: 101, label: 'Features', url: '/#features' },
        { id: 102, label: 'Pricing', url: '/#pricing' },
        { id: 103, label: 'Testimonials', url: '/#testimonials' },
      ],
    },
    {
      id: 1,
      label: 'Dynamic Page',
      url: '/dynamic',
      children: [
        { id: 110, label: 'Latest', url: '/dynamic#latest' },
        { id: 111, label: 'Most Read', url: '/dynamic#popular' },
        { id: 112, label: 'Guides', url: '/dynamic#guides' },
        { id: 113, label: 'Case Studies', url: '/dynamic#cases' },
      ],
    },
    {
      id: 2,
      label: 'Resources',
      url: '/',
      children: [
        { id: 120, label: 'Docs', url: '/#docs' },
        { id: 121, label: 'API', url: '/#api' },
        { id: 122, label: 'Community', url: '/#community' },
        { id: 123, label: 'Support', url: '/#support' },
      ],
    },
    {
      id: 3,
      label: 'Learn',
      url: '/',
      children: [
        { id: 130, label: 'Tutorials', url: '/#tutorials' },
        { id: 131, label: 'Webinars', url: '/#webinars' },
        { id: 132, label: 'Blog', url: '/#blog' },
        { id: 133, label: 'Newsletter', url: '/#newsletter' },
      ],
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.dropdownIcon = this.sanitizer.bypassSecurityTrustHtml(dropdownIcon);
    this.logoIcon = this.sanitizer.bypassSecurityTrustHtml(companyLogoIcon);
    this.userLogoIcon = this.sanitizer.bypassSecurityTrustHtml(userLogo);
    this.sideMenuIcon = this.sanitizer.bypassSecurityTrustHtml(sideMenuIcon);
  }
}
