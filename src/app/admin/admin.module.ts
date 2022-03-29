import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
=======
import { ReactiveFormsModule } from '@angular/forms';

>>>>>>> ea01cb73096a97fbd3278150e657dcbd75aed8ff

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
<<<<<<< HEAD
    BookComponent,
=======
>>>>>>> ea01cb73096a97fbd3278150e657dcbd75aed8ff
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule,
=======
    ReactiveFormsModule
>>>>>>> ea01cb73096a97fbd3278150e657dcbd75aed8ff
  ]
})
export class AdminModule { }
