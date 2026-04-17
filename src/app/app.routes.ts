import { Routes } from '@angular/router';

import { AboutPageComponent } from './about/about-page.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { HomePageComponent } from './home/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'ARQ Tech Solutions | Home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'ARQ Tech Solutions | About',
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title: 'ARQ Tech Solutions | Contact',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
