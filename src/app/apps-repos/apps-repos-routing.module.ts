import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { AppsReposHomeComponent } from './components/apps-repos-home/apps-repos-home.component';
import { AppRepoAngularComponent } from './components/app-repo-angular/app-repo-angular.component';
import { AppRepoNodeComponent } from './components/app-repo-node/app-repo-node.component';
import { AppRepoReactComponent } from './components/app-repo-react/app-repo-react.component';

const routes: Routes = [
  {
    path: '',
    component: AppsReposHomeComponent
  },
  {
    path: 'angular',
    component: AppRepoAngularComponent
  },
  {
    path: 'react',
    component: AppRepoReactComponent
  },
  {
    path: 'node',
    component: AppRepoNodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsReposRoutingModule {}
