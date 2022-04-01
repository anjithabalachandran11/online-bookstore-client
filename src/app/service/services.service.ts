import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  editbook:any
  bookid:any

  constructor(private router:Router) { }

  // viewbook(id:any){
  //   this.bookid=id
  //   this.router.navigateByUrl('/customer/viewbook')
  // }
  adminviewbook(id:any){
    this.bookid=id
  }
  viewbook(){
    this.router.navigateByUrl('/customer/viewbook')
  }
  
}
