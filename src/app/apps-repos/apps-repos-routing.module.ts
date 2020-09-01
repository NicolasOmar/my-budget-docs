import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { AppsReposHomeComponent } from './components/apps-repos-home/apps-repos-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppsReposHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsReposRoutingModule {}
