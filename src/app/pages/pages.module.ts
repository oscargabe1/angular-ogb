import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

import { FirstComponent } from "./first/first.component";
import { FormsComponent } from './forms/forms.component';
import { PagesComponent } from './pages.component';
import { PipesComponent } from './pipes/pipes.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    FirstComponent,
    PagesComponent,
    PipesComponent,
    FormsComponent,
    TablesComponent,
  ],
  exports:[
    FirstComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
