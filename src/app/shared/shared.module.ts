import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule, MatDividerModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material';






@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class SharedModule { }
