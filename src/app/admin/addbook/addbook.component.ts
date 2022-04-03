import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const options ={
  headers : new HttpHeaders()
}

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookdata=new FormGroup({
    bookid:new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(4)])),
    bookname:new FormControl('',Validators.compose([Validators.required])),
    author:new FormControl('',Validators.compose([Validators.required])),
    description:new FormControl('',Validators.compose([Validators.required])),
    language:new FormControl('',Validators.compose([Validators.required])),
    publisher:new FormControl('',Validators.compose([Validators.required])),
    price:new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]*')])),
  });

  url='http://localhost:3000';

  constructor(private router:Router, private http:HttpClient) { }

  addbook(){
    let book_id=this.bookdata.value.bookid
    let book_name=this.bookdata.value.bookname
    let author = this.bookdata.value.author
    let description = this.bookdata.value.description
    let language = this.bookdata.value.language
    let publisher = this.bookdata.value.publisher
    let price = this.bookdata.value.price

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

    this.http.post(this.url+'/addbook',data,options).subscribe((result)=>{
      const addbookresult=JSON.parse(JSON.stringify(result))
      if(addbookresult.statuscode==404){
        alert(JSON.parse(JSON.stringify(result)).message)
        this.router.navigateByUrl('/admin')
      }
      else{
        alert(JSON.parse(JSON.stringify(result)).message)
      }
      
    })

    window.location.reload()
  }
  ngOnInit(): void {
  }

}
