import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  post
  addFriend=[
    {name:'Varun'},{name:'Naveen'},{name:'Yash'},{name:'Tushar'},{name:'Shouvik'}
  ]
  constructor() { }

  ngOnInit() {
  }

  publish(){
    console.log(this.post)
  }

}
