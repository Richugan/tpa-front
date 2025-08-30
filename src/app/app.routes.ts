import { Routes } from '@angular/router';
import { LandingPage } from './view/landing-page/landing-page';
import { DynamicPage } from './view/dynamic-page/dynamic-page';
import { BlogDetailed } from './view/dynamic-page/blog-detailed/blog-detailed';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'dynamic',
    component: DynamicPage,
  },
  {
    path: 'dynamic/:id',
    component: BlogDetailed,
  },
];
