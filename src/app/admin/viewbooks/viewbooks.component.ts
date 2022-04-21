import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const options ={
  headers : new HttpHeaders()
}

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
  count = 0
  currentIndex = 0
  currentBookData:any

  constructor(private router:Router, private http:HttpClient, private sr:ServicesService) { 

    let option="book_id"
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()

    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }

    const data={
        option,
    }

    this.http.post(this.url+'/viewbook/',data,options).subscribe(async (result)=>{
      const viewbookresult = await JSON.parse(JSON.stringify(result))
      if(viewbookresult.statuscode==404){
        alert(viewbookresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.bookdata=result
        this.data=true
        this.page()
      }
    })
  }

  viewdata(sortoption:any){
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()

    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }

    const data={
      sortoption,
    }

    this.http.post(this.url+'/viewbook/',data,options).subscribe(async (result)=>{
      const viewbookresult = await JSON.parse(JSON.stringify(result))
      if(viewbookresult.statuscode==404){
        alert(viewbookresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.bookdata=result
        this.data=true
        this.count=0
        this.currentIndex=0
        this.page()
      }
    })
  }

  page(){
    this.currentBookData = new Array()
    this.currentIndex = this.count
    for(let i=0; i<5; i=i+1){
      if(this.currentIndex<this.bookdata.result.length){
        this.currentBookData.push(this.bookdata.result[this.currentIndex])
        this.currentIndex=this.currentIndex+1
      }
    }
  }
  
  previous(){
    if(this.count<=0){
      this.count=0;
      this.page();
    }
    else{
      this.count=this.count-5
      this.page();
    }
  }
   next(){
     if(this.count<this.bookdata.result.length && this.currentIndex!=this.bookdata.result.length){
       this.count = this.count+5
       this.page()
     }
   }

  deletebook(book:any){
    let book_id=book.book_id

    const data={
      book_id
    }

    this.data=false
    this.http.put(this.url+'/delete',data).subscribe((result)=>{
      if(result){
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

  editbook(book:any){
    localStorage.setItem("cbook",book.book_id)
    this.router.navigateByUrl('/admin/editbook')
  }

  ngOnInit(): void {
  }

}
