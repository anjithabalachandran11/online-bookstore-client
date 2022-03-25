import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';





@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminpageComponent,
    DeletebookComponent,
    ViewbooksComponent,
    ViewusersComponent,
    AddbookComponent,
    EditbookComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
