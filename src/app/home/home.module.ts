import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AdminModule } from '../admin/admin.module';
import { CustomerModule } from '../customer/customer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AdminModule,
    CustomerModule
  ]
})
export class HomeModule { }
