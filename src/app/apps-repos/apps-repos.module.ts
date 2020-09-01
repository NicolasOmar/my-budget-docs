import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ROUTING MODULE
import { AppsReposRoutingModule } from './apps-repos-routing.module';
// COMPONENTS
import { AppsReposHomeComponent } from './components/apps-repos-home/apps-repos-home.component';



@NgModule({
  declarations: [AppsReposHomeComponent],
  imports: [
    CommonModule,
    AppsReposRoutingModule
  ]
})
export class AppsReposModule { }
