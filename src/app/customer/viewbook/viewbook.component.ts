import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})

export class ViewbookComponent implements OnInit {

  book:any
  comment:any
  name=localStorage.getItem("name")
  id=localStorage.getItem("u_id")
  rating=0
  avgrating:any
  disable=false
  iseditable=false
  newcomment:any

  constructor(private router:Router, private sr:ServicesService) {

    const bookid=localStorage.getItem("cbook")
    this.sr.userviewbook(bookid).subscribe((result)=>{
      const bookresult=JSON.parse(JSON.stringify(result))
      if(bookresult.statuscode==200){
        this.book=result
        this.avgrating=this.book.data.averagerating
      }
      else{
        alert(bookresult.message)
        this.router.navigateByUrl('/customer')
      }
    })
  }

  postcomment(comment:any){
    let userid=localStorage.getItem("userid")
    let bookid=localStorage.getItem("cbook")
    let rating=this.rating
    this.sr.postcomment(userid,bookid,comment,rating).subscribe((result)=>{
      if(result){
        this.router.navigateByUrl('/viewbook')
      }
    })
  }

  editcomment(comment:any){
    let userid=localStorage.getItem("userid")
    let bookid=localStorage.getItem("cbook")
    let rating=this.rating
    this.sr.editcomment(userid,bookid,comment,rating).subscribe((result)=>{
      const editresult=JSON.parse(JSON.stringify(result))
      if(editresult.statuscode==200){
        window.location.reload()
      }
      else{
        alert(editresult.message)
      }
    })
  }

  deletecomment(){
    let userid=localStorage.getItem("userid")
    let bookid=localStorage.getItem("cbook")
    let rating=this.rating
    this.sr.deletecomment(userid,bookid).subscribe((result)=>{
      const deleteresult=JSON.parse(JSON.stringify(result))
      if(deleteresult.statuscode==200){
        window.location.reload()
      }
      else{
        alert(deleteresult.message)
      }
    })
  }

  goback(){
    this.router.navigateByUrl('/books')
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/customer')
  }
  
  ngOnInit(): void {

  }
}
