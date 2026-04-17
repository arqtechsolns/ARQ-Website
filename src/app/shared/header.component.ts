import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { navLinks, siteBrand } from '../site-content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly navLinks = navLinks;
  protected readonly siteBrand = siteBrand;
  protected menuOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
