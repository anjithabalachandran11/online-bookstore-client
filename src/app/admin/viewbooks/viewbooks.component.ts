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
  state:boolean=false

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

    this.http.post(this.url+'/viewbook/',data,options).subscribe((result)=>{
      const viewbookresult = JSON.parse(JSON.stringify(result))
      if(viewbookresult.statuscode==404){
        alert(viewbookresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.bookdata=result
        this.data=true
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

    this.http.post(this.url+'/viewbook/',data,options).subscribe((result)=>{
      const viewbookresult = JSON.parse(JSON.stringify(result))
      if(viewbookresult.statuscode==404){
        alert(viewbookresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.bookdata=result
        this.data=true
      }
    })
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

  ngOnInit(): void {
  }

}
