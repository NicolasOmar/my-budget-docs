import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { ActionsCardComponent } from './components/actions-card/actions-card.component';

const COMPONENTS = [
  ActionsCardComponent
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
