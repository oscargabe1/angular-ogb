import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PagesComponent } from './pages.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [
            {path: '', component: FirstComponent},
            { path:'first', component: FirstComponent },
            { path:'pipes', component: PipesComponent }
        ]
       
    },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard/first' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
  