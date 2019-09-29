import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  login:boolean=true
  constructor() { }

  ngOnInit() {
  }

  change(value:boolean){
    this.login=value
    console.log(this.login,value)
  }



}
