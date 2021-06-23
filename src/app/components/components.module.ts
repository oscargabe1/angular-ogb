import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card/content-card.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    ContentCardComponent,
    UserListComponent
  ],
  exports:[
    ContentCardComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
