import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';




@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminpageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
