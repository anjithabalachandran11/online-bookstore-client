import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  newuserdata=new FormGroup({
    userid:new FormControl('',Validators.compose([Validators.required,Validators.pattern('[0-9]*'), Validators.minLength(5)])),
    username:new FormControl('',Validators.compose([Validators.required])),
    name:new FormControl('', Validators.compose([Validators.required])),
    password : new FormControl('',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(5)])),
    cpassword : new FormControl('',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(5)]))
  })
  
  passwordmatch:any
  url='http://localhost:3000'


  constructor(private router:Router, private http:HttpClient) { }
  
  register(){
    let user_id=this.newuserdata.value.userid
    let username=this.newuserdata.value.username
    let name=this.newuserdata.value.name
    let password=this.newuserdata.value.password
    let cpassword=this.newuserdata.value.cpassword

    if(password!=cpassword){
      this.passwordmatch=false;
    }
    else{
      this.passwordmatch=true;
      const data={
        user_id,
        username,
        name,
        password
      }
      this.http.post(this.url+'/register',data).subscribe((result)=>{
        alert(JSON.parse(JSON.stringify(result)).message)
      })
      window.location.reload()
    } 
  }

  back(){
    this.router.navigateByUrl('/customer')
  }

  ngOnInit(): void {
  }

}
