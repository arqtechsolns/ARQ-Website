import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { navLinks, siteBrand, siteContact } from '../site-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly navLinks = navLinks;
  protected readonly siteBrand = siteBrand;
  protected readonly siteContact = siteContact;
}
