import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books:any
  sortoption:any
  name=localStorage.getItem("name")

  constructor(private router:Router, private sr:ServicesService) {
    let option="book_id"

    this.sr.getbooks(option).subscribe((result)=>{
      const getbooksresult = JSON.parse(JSON.stringify(result))
      if(getbooksresult.statuscode==200){
       // this.books=result
       this.books=getbooksresult.books
      }
      else{
        alert(getbooksresult.message)
        this.router.navigateByUrl('/customer')
      }
    })
  }

  logout(){
    //window.location.reload()
    // localStorage.clear()
    // this.books=null
    this.router.navigateByUrl('/customer')
  }

  getbooks(option:any){
    this.sr.getbooks(option).subscribe((result)=>{
      const getbooksresult=JSON.parse(JSON.stringify(result))
      if(getbooksresult.statuscode==200){
        //this.books=result
        this.books=getbooksresult.books
      }
      else{
        alert(getbooksresult.message)
        this.router.navigateByUrl('/customer')
      }
    })
  }

  view(id:any){
    localStorage.setItem("cbook",id)
    this.sr.viewbook()
  }

  ngOnInit(): void {
    
  }
}
