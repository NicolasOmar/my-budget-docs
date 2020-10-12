import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ROUTING MODULE
import { AppsReposRoutingModule } from './apps-repos-routing.module';
// COMPONENTS
import { AppsReposHomeComponent } from './components/apps-repos-home/apps-repos-home.component';
import { AppRepoAngularComponent } from './components/app-repo-angular/app-repo-angular.component';
import { AppRepoReactComponent } from './components/app-repo-react/app-repo-react.component';
import { AppRepoNodeComponent } from './components/app-repo-node/app-repo-node.component';
import { AppRepoBaseComponent } from './components/app-repo-base/app-repo-base.component';

@NgModule({
  declarations: [
    AppsReposHomeComponent,
    AppRepoAngularComponent,
    AppRepoReactComponent,
    AppRepoNodeComponent,
    AppRepoBaseComponent
  ],
  imports: [CommonModule, AppsReposRoutingModule]
})
export class AppsReposModule {}
