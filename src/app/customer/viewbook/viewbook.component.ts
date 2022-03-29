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
  constructor(private router:Router, private sr:ServicesService, private http:HttpClient) {
    const bookid=this.sr.bookid
    const data={
      bookid
    }
    this.http.post(this.url+'/book/',data).subscribe((result)=>{
      if(result){
        this.book=result
        console.log(this.book.data.comments)
        localStorage.setItem("cbook",this.book.data.book_id)
      }
    })
   }

  postcomment(comment:any){
    let userid=localStorage.getItem("userid")
    let bookid=localStorage.getItem("cbook")
    console.log(userid,bookid)
    console.log("comment",comment)
    const data={
      userid,
      bookid,
      comment
    }
    this.http.put(this.url+'/postcomment',data).subscribe((result)=>{
      if(result){
        console.log("post result",result)
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
