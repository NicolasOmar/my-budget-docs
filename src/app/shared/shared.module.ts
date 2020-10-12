import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { ActionCardsComponent } from './components/action-cards/action-cards.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';

const COMPONENTS = [ActionCardsComponent, NavLinkComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
