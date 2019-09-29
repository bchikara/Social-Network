import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  @Output() register = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  login(){
   this.register.emit(true)
  }

  Register(form){
   console.log(form.value);
  }
}
