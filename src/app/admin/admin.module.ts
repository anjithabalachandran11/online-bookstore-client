import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminpageComponent,
    ViewbooksComponent,
    ViewusersComponent,
    AddbookComponent,
    EditbookComponent,
    BookComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
