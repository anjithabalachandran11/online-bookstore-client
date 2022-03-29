import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  editbook:any
  bookid:any
  constructor(private router:Router, private http:HttpClient) { }

  viewbook(id:any){
    this.bookid=id
    this.router.navigateByUrl('/customer/viewbook')
  }
  adminviewbook(id:any){
    this.bookid=id
  }
  

}
