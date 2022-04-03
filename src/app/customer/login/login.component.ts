import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logindata=new FormGroup({
    username:new FormControl('',Validators.compose([Validators.required])),
    password : new FormControl('',Validators.compose([Validators.required]))
  })

  url='http://localhost:3000'
  current_user:any

  constructor( private router:Router, private http:HttpClient) { }

  cancel(){
    this.router.navigateByUrl('/customer')
  }

  login(){
    let username=this.logindata.value.username
    let password=this.logindata.value.password

    const data={
      username,
      password
    }

    this.http.post(this.url+'/login',data).subscribe((result)=>{
      this.current_user=JSON.parse(JSON.stringify(result))
      if(this.current_user.statuscode==200){
        alert(this.current_user.message)
        localStorage.setItem("username",this.current_user.user.username)
        localStorage.setItem("userid",this.current_user.user.user_id)
        localStorage.setItem("name",this.current_user.user.name)
        localStorage.setItem('u_id',this.current_user.user._id)
        localStorage.setItem("token",this.current_user.token)
        this.router.navigateByUrl('customer/books')
      }
      else if(this.current_user.statuscode==201){
        alert(this.current_user.message)
        this.router.navigateByUrl('/login')
      }
      else{
        alert(this.current_user.message)
        this.router.navigateByUrl('/login')
      }
    })
  }

  ngOnInit(): void {
  }

}
