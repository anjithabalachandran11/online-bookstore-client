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
  avgrating:any
  disable=false

  constructor(private router:Router, private http:HttpClient) { 

    const bookid=localStorage.getItem("cbook")
    const data={
      bookid
    }
    this.http.post(this.url+'/adminbook/',data).subscribe((result)=>{
      if(result){
        this.book=result
        //console.log(this.book.data)

        localStorage.setItem("cbook",this.book.data.book_id)
        let rate=0
        let count=0
        for(let b of this.book.data.comments){
          //console.log(b.rating)
          if(parseInt(b.rating)>0){
            count=count+1
          }
          rate=rate+parseInt(b.rating)
        }
        this.avgrating=rate/count
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
