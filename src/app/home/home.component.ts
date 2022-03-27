import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  btnclick(val:any){
    if(val==1){
      this.router.navigateByUrl('/admin')
    }
    else if(val==2){
      this.router.navigateByUrl('/customer')
    }
   }
  ngOnInit(): void {
  }

}
