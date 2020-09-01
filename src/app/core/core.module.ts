import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ROUTING MODULE
import { CoreRoutingModule } from './core-routing.module';
// COMPONENTS
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [WelcomeComponent, SidebarComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [SidebarComponent]
})
export class CoreModule {}
