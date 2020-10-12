import { Component, Input } from '@angular/core';
// INTERFACES
import { Menu } from '@shared/interfaces/sidebar.interfaces';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  @Input() section: Menu;
}
