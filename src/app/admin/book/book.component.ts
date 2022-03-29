import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  url='http://localhost:3000'
  book:any

  constructor(private router:Router, private http:HttpClient) { 
    const bookid=localStorage.getItem("cbook")
    const data={
      bookid
    }
    this.http.post(this.url+'/adminbook/',data).subscribe((result)=>{
      if(result){
        this.book=result
        console.log(this.book.data)
      }
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/admin')
  }
  back(){
    localStorage.removeItem("cbook")
    this.router.navigateByUrl('/adminpage')
  }

  ngOnInit(): void {
  }

}
