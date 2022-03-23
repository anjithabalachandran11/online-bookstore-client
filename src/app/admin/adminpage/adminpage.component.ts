import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  addbook:boolean=false
  editbook:boolean=false
  deletebook:boolean=false
  viewbook:boolean=false
  viewusers:boolean=false
  btnvalue:any
  constructor() { }

  btnclick(val:any){
    this.btnvalue=val
    console.log(val,this.btnvalue)
    // if(val==1){
    //   this.addbook=false;
    //   this.editbook=false;
    //   this.deletebook=false;
    //   this.viewusers=false
    //   this.viewbook=true;
    //   console.log(this.addbook,this.editbook,this.deletebook,this.viewusers,this.viewbook)
    // }
    // else if(val==2){
    //   this.viewbook=false;
    //   this.editbook=false;
    //   this.deletebook=false;
    //   this.viewusers=false;
    //   this.addbook=true;
    //   console.log(this.addbook,this.editbook,this.deletebook,this.viewusers,this.viewbook)
    // }
    // else if(val==3){
    //   this.viewbook=false;
    //   this.addbook=false;
    //   this.deletebook=false;
    //   this.viewusers=false;
    //   this.editbook=true;
    //   console.log(this.addbook,this.editbook,this.deletebook,this.viewusers,this.viewbook)
    // }
    // else if(val==4){
    //   this.addbook=false;
    //   this.editbook=false;
    //   this.viewbook=false;
    //   this.viewusers=false;
    //   this.deletebook=true;
    //   console.log(this.addbook,this.editbook,this.deletebook,this.viewusers,this.viewbook)
    // }
    // else if(val==5){
    //   this.addbook=false;
    //   this.editbook=false;
    //   this.deletebook=false;
    //   this.viewbook=false;
    //   this.viewusers=true;
    //   console.log(this.addbook,this.editbook,this.deletebook,this.viewusers,this.viewbook)
    // }
    // else{
    //   this.viewbook=false;
    //   this.addbook=false;
    //   this.editbook=false;
    //   this.deletebook=false;
    //   this.viewusers=false;
    //   console.log(this.addbook,this.editbook,this.deletebook,this.viewusers,this.viewbook)
    // }
  }
  ngOnInit(): void {
  }

}
