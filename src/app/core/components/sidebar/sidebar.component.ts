import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes = [
    {
      path: '../apps-repos',
      text: 'Apps & Repos'
    },
    {
      path: '../project',
      text: 'Project'
    },
    {
      path: '../technical',
      text: 'Technical'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
