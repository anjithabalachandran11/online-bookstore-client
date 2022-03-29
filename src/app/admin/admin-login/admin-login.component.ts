import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public user:any

  adminlogindata=new FormGroup({
    adminusername:new FormControl('',Validators.compose([Validators.required])),
    adminpassword:new FormControl('',Validators.compose([Validators.required]))
  })

  current_user:any


  constructor(private router:Router, private http:HttpClient) {  }

  login(){
    let username = (this.adminlogindata.value.adminusername).toUpperCase()
    let password = this.adminlogindata.value.adminpassword
    const data = {
      username,
      password
    }
    console.log(username,password)
    this.http.post('http://localhost:3000/adminlogin',data).subscribe((result)=>{
      console.log("result",result)
      this.current_user=JSON.parse(JSON.stringify(result))
      
      if(this.current_user.statuscode==200){
        alert(this.current_user.message)
        localStorage.setItem("username",this.current_user.user.username)
        localStorage.setItem("userid",this.current_user.user.user_id)
        this.router.navigateByUrl('/adminpage')
      }
      else if(this.current_user.statuscode==400){
        alert("incorrect password")
        this.router.navigateByUrl('/admin-login')
      }
      else{
        alert(this.current_user.message)
        this.router.navigateByUrl('/admin-login')
      }

    })
  }


  ngOnInit(): void {
  }
  
}
