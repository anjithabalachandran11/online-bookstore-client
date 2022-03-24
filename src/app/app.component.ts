import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';
  // main:boolean=true

  // constructor(private router:Router) { }

  // btnclick(val:any){
  //   if(val==1){
  //     this.main=false
  //     this.router.navigateByUrl('/admin')
  //   }
  //   else if(val==2){
  //     this.main=false
  //     this.router.navigateByUrl('/customer')
  //   }
  // }
}
