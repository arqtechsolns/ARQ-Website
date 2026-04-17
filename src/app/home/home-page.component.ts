import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { projectShowcase, services } from '../site-content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected readonly services = services;
  protected readonly projectShowcase = projectShowcase;
}
