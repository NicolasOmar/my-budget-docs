import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { ActionsCardComponent } from './components/actions-card/actions-card.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';

const COMPONENTS = [ActionsCardComponent, NavLinkComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
