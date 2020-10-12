import { Component } from '@angular/core';
// CONSTANTS
import { ReactConfig } from '../../constants/app-repo-data.const';

@Component({
  selector: 'doc-app-repo-react',
  templateUrl: './app-repo-react.component.html',
  styleUrls: ['./app-repo-react.component.scss']
})
export class AppRepoReactComponent {
  public config = ReactConfig;
}
