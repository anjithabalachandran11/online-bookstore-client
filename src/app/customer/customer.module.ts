import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { ViewbookComponent } from './viewbook/viewbook.component';


@NgModule({
  declarations: [
    CustomerComponent,
    RegisterComponent,
    LoginComponent,
    BooksComponent,
    ViewbookComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
