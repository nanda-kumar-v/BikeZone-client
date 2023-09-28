import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-dashboard',
  templateUrl: './rent-dashboard.component.html',
  styleUrls: ['./rent-dashboard.component.css']
})
export class RentDashboardComponent {
    rentForm = this.fb.group({
    ndays:['',[Validators.required,Validators.pattern('[0-9]*')]],
    dob: ['', [Validators.required]],
    adrs: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9.(), ]*')],],
    mob: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor (private fb:FormBuilder) {}

}
