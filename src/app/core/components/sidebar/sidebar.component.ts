import { Component } from '@angular/core';
// INTERFACES
import { Menu } from '@shared/interfaces/sidebar.interfaces';
// CONSTANTS
import { HomeRoute, SidebarLinks } from '@core/constants/data.const';

@Component({
  selector: 'doc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public homeRoute: Menu = HomeRoute;
  public routes: Array<Menu> = SidebarLinks;
}
