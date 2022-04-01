import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})

export class ViewusersComponent implements OnInit {

  data=false
  users:any
  sortoption:any
  userdata:any
  url='http://localhost:3000'
  //pageNumber=0

  constructor(private router:Router, private http:HttpClient) {
    //let pageNumber=this.pageNumber
    let option="user_id"
    const data={
      option,
      //pageNumber
    }
    this.http.post(this.url+'/viewuser',data).subscribe((result)=>{
      if(result){
        this.users=result
        // console.log(this.users.result)
        this.data=true
      }
    })

  }

  viewusers(option:any){
    //let pageNumber=this.pageNumber
    const data={
      option,
      //pageNumber
    }
    this.http.post(this.url+'/viewuser',data).subscribe((result)=>{
      if(result){
        this.users=result
        // console.log(this.users.result)
        this.data=true
      }
    })
  }

  blockuser(user:any){
    console.log(user)
    let user_id=user.user_id
    const data={
      user_id
    }
    this.data=false
    this.http.put(this.url+'/blockuser',data).subscribe((result)=>{
      if(result){
        //console.log(result)
        this.userdata=result
        alert(this.userdata.message)
        this.viewusers(this.sortoption)
      }
    })
  }

  unblockuser(user:any){
    let user_id=user.user_id
    const data={
      user_id
    }
    this.data=false
    this.http.put(this.url+'/unblockuser',data).subscribe((result)=>{
      if(result){
        //console.log(result)
        this.userdata=result
        alert(this.userdata.message)
        this.viewusers(this.sortoption)
      }
    })
  }

  back(){
    window.location.reload()
  }
  // prev(){
  //   if(this.pageNumber<0){
  //     this.pageNumber=0
  //   }
  //   else{
  //     this.pageNumber=this.pageNumber-1
  //   }
    
  // }
  
  // next(){
  //   this.pageNumber=this.pageNumber+1
  // }

  ngOnInit(): void {
  }

}
