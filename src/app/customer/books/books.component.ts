import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  url='http://localhost:3000'
  books:any
  sortoption:any
  constructor(private router:Router, private http:HttpClient, private sr:ServicesService) {
    let option="book_id"
    const data={
      option
    }
    console.log(option)
    this.http.post(this.url+'/books',data).subscribe((result)=>{
      if(result){
        //console.log("result",result)
        this.books=result
        //console.log("books",this.books.books)
      }
    })

   }



  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/customer')
  }
  getbooks(option:any){
    const data={
      option
    }
    console.log(option)
    this.http.post(this.url+'/books',data).subscribe((result)=>{
      if(result){
        console.log("result",result)
        this.books=result
        console.log("books",this.books.books)
      }
    })
  }
  view(id:any){
    this.sr.viewbook(id)
  }
  ngOnInit(): void {
    
  }

}
