import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friends=[
    {name:'Lokesh',},
    {name:'Pulkit',},
    {name:'Ananya',},
    {name:'Shrey',},
    {name:'Sunny',},
    {name:'Shruti',},
    {name:'Kajal',},
    {name:'Garima',},
    {name:'Ayushi',},
  ]

}
