import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularToolTipComponent } from './angular-tool-tip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularToolTipComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AngularToolTipComponent]
})
export class AngularToolTipModule { }
