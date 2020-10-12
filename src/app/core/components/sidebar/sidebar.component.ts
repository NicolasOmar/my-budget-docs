import { Component } from '@angular/core';
// INTERFACES
import { Menu } from '@core/interfaces/sidebar.interfaces';

@Component({
  selector: 'doc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public homeRoute: Menu = {
    label: 'My Budget | Documentation',
    icon: 'file alternate outline icon',
    path: ['/']
  };
  public routes: Array<Menu> = [
    {
      label: 'Apps & Repos',
      path: ['/apps-repos']
    },
    {
      label: 'Project',
      path: ['/project']
    },
    {
      label: 'Technical',
      path: ['/technical'],
      sections: [
        {
          label: 'Error Handling',
          path: ['/technical/error-handling']
        }
      ]
    }
  ];
}
