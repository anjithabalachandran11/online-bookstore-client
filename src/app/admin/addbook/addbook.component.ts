import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    const data={
      book_id,
      book_name,
      author,
      description,
      language,
      publisher,
      price
    }
    this.http.post(this.url+'/addbook',data).subscribe((result)=>{
      alert(JSON.parse(JSON.stringify(result)).message)
    })
    window.location.reload()
  }
  
  back(){
    window.location.reload()
  }

  ngOnInit(): void {
  }

}
