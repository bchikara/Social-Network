import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.scss']
})
export class NearbyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  peoples=[
    {name:'Nishtha',distance:'10 m'},
    {name:'Pulkit',distance:'130 m'},
    {name:'Sid',distance:'300 m'},
    {name:'Shrey',distance:'456 m'},
    {name:'Jyoti',distance:'600 m'},
    {name:'Shruti',distance:'800 m'},
    {name:'Kajal',distance:' 1.1 km'},
    {name:'Garima',distance:'1.3 km'},
    {name:'Ayushi',distance:'1.9 km'},
  ]

}
