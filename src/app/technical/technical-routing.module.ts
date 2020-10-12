import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { TechnicalHomeComponent } from './components/technical-home/technical-home.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';

const routes: Routes = [
  {
    path: '',
    component: TechnicalHomeComponent
  },
  {
    path: 'error-handling',
    component: ErrorHandlingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalRoutingModule {}
