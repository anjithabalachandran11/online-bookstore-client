import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  { path:'admin-login',component:AdminLoginComponent },
  { path:'adminpage', component:AdminpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
