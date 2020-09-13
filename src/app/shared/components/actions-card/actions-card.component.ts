import { Component, OnInit } from '@angular/core';
import { StylesEnum } from '@shared/enums/stylesEnum';

@Component({
  selector: 'doc-actions-card',
  templateUrl: './actions-card.component.html',
  styleUrls: ['./actions-card.component.scss']
})
export class ActionsCardComponent implements OnInit {
  public sections = [
    {
      header: 'Apps & Repos',
      path: 'apps-repos'
    },
    {
      header: 'Project',
      path: 'project'
    },
    {
      header: 'Technical',
      path: 'technical'
    }
  ];
  public cardsHeaderClass: string;

  ngOnInit(): void {
    this.cardsHeaderClass = `ui ${StylesEnum[this.sections.length]} cards`;
  }
}
