import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { ProjectHomeComponent } from './components/project-home/project-home.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
