import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ROUTING MODULE
import { TechnicalRoutingModule } from './technical-routing.module';
// COMPONENTS
import { TechnicalHomeComponent } from './components/technical-home/technical-home.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';

@NgModule({
  declarations: [TechnicalHomeComponent, ErrorHandlingComponent],
  imports: [CommonModule, TechnicalRoutingModule]
})
export class TechnicalModule {}
