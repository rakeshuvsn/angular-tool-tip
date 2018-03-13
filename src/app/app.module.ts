import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularToolTipModule } from './angular-tool-tip/angular-tool-tip.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularToolTipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
