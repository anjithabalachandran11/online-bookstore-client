import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options ={
  headers : new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  editbook:any
  bookid:any
  url='http://localhost:3000'

  constructor(private router:Router,private http:HttpClient) { }

  // ADMIN OPERATION

  // adminviewbook(id:any){
  //   this.bookid=id
  // }

  // admineditbook(id:any){
  //   this.editbook=id
  // }

//CUSTOMER OPERATIONS

  viewbook(){
    this.router.navigateByUrl('/customer/viewbook')
  }
  
  getbooks(option:any){
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()
    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }
    const data={
      option
    }
    return this.http.post(this.url+'/books',data,options)
  }

  userviewbook(bookid:any){
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()
    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }

    const data={
      bookid
    }
    
    return this.http.post(this.url+'/book',data,options)
  }

  postcomment(userid:any,bookid:any,comment:any,rating:any){
    const data={
      userid,
      bookid,
      comment,
      rating
    }
    return this.http.post(this.url+'/postcomment',data)
  }

  editcomment(userid:any,bookid:any,newcomment:any,rating:any){
    const data={
      userid,
      bookid,
      newcomment,
      rating
    }
    return this.http.put(this.url+'/editcomment',data)
  }

  deletecomment(userid:any,bookid:any){
    const data={
      userid,
      bookid,
    }
    return this.http.put(this.url+'/deletecomment',data)
  }
}
