import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight/highlight.directive';
import { RutMaskDirective } from './rut-mask/rut-mask.directive';
import { ScrollToIdDirective } from './scroll-to-id/scroll-to-id.directive';
import { SoloAdminDirective } from './solo-admin/solo-admin.directive';
import { SiempreMinusculaDirective } from './siempre-minuscula/siempre-minuscula.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    RutMaskDirective,
    ScrollToIdDirective,
    SoloAdminDirective,
    SiempreMinusculaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    RutMaskDirective,
    ScrollToIdDirective,
    SoloAdminDirective,
    SiempreMinusculaDirective
  ]
})
export class DirectivesModule { }
