import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FormsComponent } from './forms/forms.component';
import { PagesComponent } from './pages.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { MatTableComponent } from './tables/mat-table/mat-table.component';

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [
            {path: '', component: FirstComponent},
            { path:'first', component: FirstComponent },
            { path:'forms', component: FormsComponent },
            { path:'pipes', component: PipesComponent },
            { path:'tables', component: DataTableComponent },
            { path:'matTables', component: MatTableComponent }
        ]
       
    },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard/first' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  