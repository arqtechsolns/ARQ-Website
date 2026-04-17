import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { platformIcons } from '../site-content';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  protected readonly platformIcons = platformIcons;
}
