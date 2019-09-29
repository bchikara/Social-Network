import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Output() login = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  register(){
    this.login.emit(false);
  }

  Login(form){
   console.log(form.value)
  }

}
