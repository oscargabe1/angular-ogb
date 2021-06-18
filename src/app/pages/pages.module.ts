import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FirstComponent } from "./first/first.component";
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    FirstComponent,
    PagesComponent
  ],
  exports:[
    FirstComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
