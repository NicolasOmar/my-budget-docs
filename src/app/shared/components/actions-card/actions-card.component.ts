import { Component, OnInit } from '@angular/core';
// INTERFACES
import { Menu } from '@shared/interfaces/sidebar.interfaces';
// ENUMS
import { StylesEnum } from '@shared/enums/stylesEnum';

@Component({
  selector: 'doc-actions-card',
  templateUrl: './actions-card.component.html',
  styleUrls: ['./actions-card.component.scss']
})
export class ActionsCardComponent implements OnInit {
  public modules: Array<Menu> = [
    {
      label: 'Apps & Repos',
      description: this.generateDescription('Apps & Repos'),
      path: ['/apps-repos']
    },
    {
      label: 'Project',
      description: this.generateDescription('Project'),
      path: ['/project']
    },
    {
      label: 'Technical',
      description: this.generateDescription('Technical'),
      path: ['/technical'],
      sections: [
        {
          label: 'Error handling',
          path: ['/technical/error-handling']
        }
      ]
    }
  ];
  public cardsHeaderClass: string;

  ngOnInit(): void {
    this.cardsHeaderClass = `ui ${StylesEnum[this.modules.length]} cards`;
  }

  private generateDescription(label: string): string {
    return `Go to ${label} documentation section.`;
  }
}
