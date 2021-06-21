import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesRoutingModule } from "./pages/pages.routing";


const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
