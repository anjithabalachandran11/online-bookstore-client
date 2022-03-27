import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  btnvalue:any
  constructor(private router:Router) { }

  btnclick(val:any){
    this.btnvalue=val
    console.log(val,this.btnvalue)
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/admin')
  }
  ngOnInit(): void {
  }

}
