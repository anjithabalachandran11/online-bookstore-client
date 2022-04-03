import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminComponent } from './admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BookComponent } from './book/book.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [{ path: '', component: AdminComponent },
  { path:'adminpage', component:AdminpageComponent },
  { path:'addbook', component:AddbookComponent },
  { path:'editbook', component:EditbookComponent },
  { path:'viewbooks',component:ViewbooksComponent},
  { path:'viewusers',component:ViewusersComponent },
  { path:'book',component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
