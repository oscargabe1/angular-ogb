import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FirstComponent } from "./first/first.component";
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    FirstComponent,
    PagesComponent,
    PipesComponent
  ],
  exports:[
    FirstComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
