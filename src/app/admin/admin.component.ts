import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //public user:any

  adminlogindata=new FormGroup({
    adminusername:new FormControl('',Validators.compose([Validators.required])),
    adminpassword:new FormControl('',Validators.compose([Validators.required]))
  })

  current_user:any
  
  constructor(private router:Router, private http:HttpClient) { }

  login(){
    let username = (this.adminlogindata.value.adminusername).toUpperCase()
    let password = this.adminlogindata.value.adminpassword

    const data = {
      username,
      password
    }

    this.http.post('http://localhost:3000/adminlogin',data).subscribe((result)=>{
      this.current_user=JSON.parse(JSON.stringify(result))
      
      if(this.current_user.statuscode==200){
        alert(this.current_user.message)
        localStorage.setItem("username",this.current_user.user.username)
        localStorage.setItem("userid",this.current_user.user.user_id)
        localStorage.setItem("token",this.current_user.token)
        this.router.navigateByUrl('/adminpage')
      }
      else if(this.current_user.statuscode==400){
        alert("incorrect password")
        this.router.navigateByUrl('/admin')
      }
      else{
        alert(this.current_user.message)
        this.router.navigateByUrl('/admin')
      }
    })
  }

  ngOnInit(): void {
  }

}
