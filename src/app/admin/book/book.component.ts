import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const options ={
  headers : new HttpHeaders()
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  url='http://localhost:3000'
  book:any
  avgrating:any
  disable=false

  constructor(private router:Router, private http:HttpClient) { 

    const bookid=localStorage.getItem("cbook")
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()

    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }

    const data={
      bookid
    }

    this.http.post(this.url+'/adminbook/',data,options).subscribe(async (result)=>{
      const adminbookresult=await JSON.parse(JSON.stringify(result))
      if(adminbookresult.statuscode==404){
        alert(adminbookresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.book=adminbookresult
        localStorage.setItem("cbook",this.book.data.book_id)
        //console.log(this.book.data.averagerating)
        this.avgrating=this.book.data.averagerating
        // let rate=0
        // let count=0
        // for(let b of this.book.data.comments){
        //   if(parseInt(b.rating)>0){
        //     count=count+1
        //   }
        //   rate=rate+parseInt(b.rating)
        // }
        // this.avgrating=rate/count
        // console.log(this.avgrating)
      }
    })
  }

  logout(){
    //window.location.reload()
    localStorage.clear()
    this.router.navigateByUrl('/admin')
  }

  back(){
    localStorage.removeItem("cbook")
    this.router.navigateByUrl('admin/viewbooks')
  }

  ngOnInit(): void {
  }

}
