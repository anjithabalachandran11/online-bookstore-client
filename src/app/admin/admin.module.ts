import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BookComponent } from './book/book.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminpageComponent,
    ViewbooksComponent,
    ViewusersComponent,
    AddbookComponent,
    EditbookComponent,
    BookComponent,
    SidebarComponent,
    NavbarComponent,

    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule
  ]
})
export class AdminModule { }
