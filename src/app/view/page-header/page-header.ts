import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  mainColor = 'gray';

  navLinks: NavLink[] = [
    new NavLink(0, 'Landing Page', '/', true, []),
    new NavLink(1, 'Dynamic Page', '/dynamic', true, []),
    new NavLink(2, 'Resources', '/', true, []),
    new NavLink(3, 'Learn', '/', true, []),
  ];
  constructor() {
    this.mainColor = document.body.style.getPropertyValue('--mainColor');
  }
}
