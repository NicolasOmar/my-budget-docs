import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { TechnicalHomeComponent } from './components/technical-home/technical-home.component';

const routes: Routes = [
  {
    path: '',
    component: TechnicalHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalRoutingModule {}
