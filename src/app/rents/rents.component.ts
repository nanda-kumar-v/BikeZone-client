import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent {
    signUpForm = this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]

  })
    logInForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] 
    })

  constructor (private fb:FormBuilder) {}
}
