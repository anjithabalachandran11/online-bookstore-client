import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private router:Router) { }

  logout(){
    this.router.navigateByUrl('/customer')
  }

  ngOnInit(): void {
  }

}
