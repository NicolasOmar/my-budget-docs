import { Component, Input } from '@angular/core';
// CONSTANTS
import { AppRepoConfig, ModuleState } from '../../constants/app-repo-data.const';

@Component({
  selector: 'doc-app-repo-base',
  templateUrl: './app-repo-base.component.html',
  styleUrls: ['./app-repo-base.component.scss']
})
export class AppRepoBaseComponent {
  @Input() config: AppRepoConfig;
  public state: ModuleState;
}
