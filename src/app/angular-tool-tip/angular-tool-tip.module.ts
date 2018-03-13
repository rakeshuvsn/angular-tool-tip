import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularToolTipComponent } from './angular-tool-tip.component';
import { AngularToolTipDirective } from './angular-tool-tip.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularToolTipComponent, AngularToolTipDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AngularToolTipComponent, AngularToolTipDirective]
})
export class AngularToolTipModule { }
