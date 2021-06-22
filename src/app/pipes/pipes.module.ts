import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentReturnPipe } from './investment-return.pipe';



@NgModule({
  declarations: [
    InvestmentReturnPipe
  ],
  exports: [
    InvestmentReturnPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
