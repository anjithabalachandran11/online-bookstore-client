import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
