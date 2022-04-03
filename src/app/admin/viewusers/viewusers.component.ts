import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const options ={
  headers : new HttpHeaders()
}

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

  constructor(private router:Router, private http:HttpClient) {
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()

    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }
    
    let option="user_id"
    const data={
      option,
    }

    this.http.post(this.url+'/viewuser',data,options).subscribe((result)=>{
      const viewuserresult = JSON.parse(JSON.stringify(result))
      if(viewuserresult.statuscode==404){
        alert(viewuserresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.users=result
        this.data=true
      }
    })
  }

  viewusers(option:any){
    const tokens=localStorage.getItem(("token"))
    let headers = new HttpHeaders()

    if(tokens){
      headers = headers.append('x-access-token',tokens)
      options.headers=headers
    }

    const data={
      option,
    }

    this.http.post(this.url+'/viewuser',data,options).subscribe((result)=>{
      const viewuserresult = JSON.parse(JSON.stringify(result))
      if(viewuserresult.statuscode==404){
        alert(viewuserresult.message)
        this.router.navigateByUrl('/admin')
      }
      else{
        this.users=result
        this.data=true
      }
    })
  }

  blockuser(user:any){
    let user_id=user.user_id
    const data={
      user_id
    }

    this.data=false
    this.http.put(this.url+'/blockuser',data).subscribe((result)=>{
      if(result){
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
        this.userdata=result
        alert(this.userdata.message)
        this.viewusers(this.sortoption)
      }
    })
  }

  ngOnInit(): void {
  }

}
