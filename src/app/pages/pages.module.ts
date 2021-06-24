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

import { MatSliderModule } from "@angular/material/slider";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatTableComponent } from './tables/mat-table/mat-table.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    FirstComponent,
    PagesComponent,
    PipesComponent,
    FormsComponent,
    TablesComponent,
    MatTableComponent,
    DataTableComponent,
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
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class PagesModule { }
