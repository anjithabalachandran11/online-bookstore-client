import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  data=false
  bookdata:any
  sortoption:any
  url='http://localhost:3000'
  state:boolean=false
  constructor(private router:Router, private http:HttpClient, private sr:ServicesService) { 
    let option="book_id"
    const data={
        option,
    }
    this.http.post(this.url+'/viewbook/',data).subscribe((result)=>{
      if(result){
        this.bookdata=result
        console.log(this.bookdata.result)
        this.data=true
      }
    })
  }

  viewdata(sortoption:any){
    const data={
      sortoption,
    }
    this.http.post(this.url+'/viewbook/',data).subscribe((result)=>{
      if(result){
        this.bookdata=result
        console.log(this.bookdata.result)
        this.data=true
      }
    })
  }
  
  back(){
    window.location.reload()
  }

  deletebook(book:any){
    console.log(book)
    let book_id=book.book_id
    const data={
      book_id
    }
    this.data=false
    this.http.put(this.url+'/delete',data).subscribe((result)=>{
      if(result){
        //console.log(result)
        this.bookdata=result
        alert(this.bookdata.message)
        this.viewdata(this.sortoption)
      }
    })
  }

  addbook(book:any){
    let book_id=book.book_id
    const data={
      book_id
    }
    this.data=false
    this.http.put(this.url+'/add',data).subscribe((result)=>{
      if(result){
        //console.log(result)
        this.bookdata=result
        alert(this.bookdata.message)
        this.viewdata(this.sortoption)
      }
    })
  }

  viewselectedbook(book:any){
    localStorage.setItem("cbook",book.book_id)
    this.router.navigateByUrl('/admin/book')
  }
  ngOnInit(): void {
  }

}
