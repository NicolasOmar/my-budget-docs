import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ROUTING MODULE
import { AppRoutingModule } from './app-routing.module';
// CORE MODULE
import { CoreModule } from './core/core.module';
// INITIAL APP COMPONENT
import { AppComponent } from './core/components/app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
