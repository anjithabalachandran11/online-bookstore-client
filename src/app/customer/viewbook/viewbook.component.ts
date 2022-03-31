import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})

export class ViewbookComponent implements OnInit {

  url='http://localhost:3000'
  book:any
  comment:any
  name=localStorage.getItem("name")
  id=localStorage.getItem("u_id")
  rating:any
  avgrating:any
  disable=false

  constructor(private router:Router, private sr:ServicesService, private http:HttpClient) {

    const bookid=this.sr.bookid
    const data={
      bookid
    }
    this.http.post(this.url+'/book/',data).subscribe((result)=>{
      if(result){
        this.book=result
        //console.log(this.book.data.comments)
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
        //console.log("avgrating: ",this.avgrating,rate,count)
      }
    })
  }

  postcomment(comment:any){
    let userid=localStorage.getItem("userid")
    let bookid=localStorage.getItem("cbook")
    let rating=this.rating
    //console.log(userid,bookid)
    //console.log("comment",comment)
    const data={
      userid,
      bookid,
      comment,
      rating
    }
    this.http.put(this.url+'/postcomment',data).subscribe((result)=>{
      if(result){
        //console.log("post result",result)
        this.router.navigateByUrl('/viewbook')
      }
    })
  }

  back(){
    localStorage.removeItem("cbook")
    this.router.navigateByUrl('/books')
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/customer')
  }
  
  ngOnInit(): void {

  }
}
