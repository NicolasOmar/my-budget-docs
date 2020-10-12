import { Component } from '@angular/core';
// CONSTANTS
import { NodeConfig } from '../../constants/app-repo-data.const';

@Component({
  selector: 'doc-app-repo-node',
  templateUrl: './app-repo-node.component.html',
  styleUrls: ['./app-repo-node.component.scss']
})
export class AppRepoNodeComponent {
  public config = NodeConfig;
}
