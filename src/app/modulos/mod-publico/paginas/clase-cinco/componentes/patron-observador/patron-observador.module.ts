import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatronObservadorComponent } from './patron-observador.component';



@NgModule({
  declarations: [
    PatronObservadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatronObservadorComponent
  ]
})
export class PatronObservadorModule { }
