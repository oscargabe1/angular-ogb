import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ContentCardComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    RouterModule,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
