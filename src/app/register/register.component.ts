import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    address: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9.(), ]*')],],
    gender: ['', [Validators.required]],
    mob: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.@]*')]],
    age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dob: ['', [Validators.required]],
    qualification: ['', [Validators.required]],
    exp: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  register() {
    let fName = this.registerForm.value.fName;
    let lName = this.registerForm.value.lName;
    let address = this.registerForm.value.address;
    let mobile = this.registerForm.value.mob;
    let email = this.registerForm.value.email;
    let age = this.registerForm.value.age;
    let qualification = this.registerForm.value.qualification;
    let exp = this.registerForm.value.exp;

    this.api.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        let id = res.length + 1;
        let body = {
          id,
          fName,
          lName,
          address,
          email,
          age,
          mobile,
          qualification,
          exp,
        };
        console.log(body);
        

        this.api.register(body).subscribe({
          next: (res: any) => {
            console.log(res);
            alert('Driver Registered Successfully !!!');
            this.router.navigateByUrl('/');
          },
          error: (err: any) => {
            console.log(err.message);
          },
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
