import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const options ={
  headers : new HttpHeaders()
}


@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})

export class EditbookComponent implements OnInit {
  // tabledata=new FormGroup({bookid:new FormControl})
  // editdata=new FormGroup({
  //   bookid:new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(4)])),
  //   bookname:new FormControl('',Validators.compose([Validators.required])),
  //   author:new FormControl('',Validators.compose([Validators.required])),
  //   description:new FormControl('',Validators.compose([Validators.required])),
  //   language:new FormControl('',Validators.compose([Validators.required])),
  //   publisher:new FormControl('',Validators.compose([Validators.required])),
  //   price:new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
  // })

  url='http://localhost:3000'
  eresult:any
  bookid:any
  bookname:any
  constructor(private router:Router, private http:HttpClient, private sr:ServicesService) { 
    const cbook=localStorage.getItem("cbook")
    this.http.get(this.url+'/getebook/'+cbook).subscribe((result)=>{
       this.eresult = JSON.parse(JSON.stringify(result)).data
    })
  }

  // editbook(){
  //   let book_id=(this.editdata.value.bookid)
  //   let book_name=this.editdata.value.bookname
  //   let author = this.editdata.value.author
  //   let description = this.editdata.value.description
  //   let language = this.editdata.value.language
  //   let publisher = this.editdata.value.publisher
  //   let price = this.editdata.value.price
  
  //   const tokens=localStorage.getItem(("token"))
  //   let headers = new HttpHeaders()

  //   if(tokens){
  //     headers = headers.append('x-access-token',tokens)
  //     options.headers=headers
  //   }

  //   const data={
  //     book_id,
  //     book_name,
  //     author,
  //     description,
  //     language,
  //     publisher,
  //     price
  //   }
    
  //   this.http.put(this.url+'/edit',data,options).subscribe((result)=>{
  //     const editresult = JSON.parse(JSON.stringify(result))
  //     if(editresult.statuscode==404){
  //       alert(editresult.message)
  //       this.router.navigateByUrl('/admin')
  //     }
  //     else{
  //       alert(JSON.parse(JSON.stringify(result)).message)
  //     }
  //   })
  //   window.location.reload()
  // }

  back(){
    localStorage.removeItem("cbook")
    this.router.navigateByUrl('admin/viewbooks')
  }

  update(bookdatas:any){

    let book_id=bookdatas.bookid
    let book_name=bookdatas.bookname
    let author = bookdatas.author
    let description = bookdatas.description
    let language =bookdatas.language
    let publisher = bookdatas.publisher
    let price = bookdatas.price
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()

    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }

    const data={
      book_id,
      book_name,
      author,
      description,
      language,
      publisher,
      price
    }
    
    this.http.put(this.url+'/edit',data,options).subscribe((result)=>{
      const editresult = JSON.parse(JSON.stringify(result))
      if(editresult.statuscode==404){
        alert(editresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        alert(JSON.parse(JSON.stringify(result)).message)
        //this.router.navigateByUrl('/viewbooks')
      }
    })

  }

  ngOnInit(): void {
  }

}
