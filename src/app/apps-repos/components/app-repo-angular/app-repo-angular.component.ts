import { Component } from '@angular/core';
// CONSTANTS
import { AngularConfig } from '../../constants/app-repo-data.const';

@Component({
  selector: 'doc-app-repo-angular',
  templateUrl: './app-repo-angular.component.html',
  styleUrls: ['./app-repo-angular.component.scss']
})
export class AppRepoAngularComponent {
  public config = AngularConfig;
}
