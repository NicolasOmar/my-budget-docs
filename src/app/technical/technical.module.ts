import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ROUTING MODULE
import { TechnicalRoutingModule } from './technical-routing.module';
// COMPONENTS
import { TechnicalHomeComponent } from './components/technical-home/technical-home.component';

@NgModule({
  declarations: [TechnicalHomeComponent],
  imports: [CommonModule, TechnicalRoutingModule]
})
export class TechnicalModule {}
