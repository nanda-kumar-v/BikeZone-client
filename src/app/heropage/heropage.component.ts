import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css'],
})
export class HeropageComponent {
  fare: any = 0;
  isFare:boolean = true

  fareForm = this.fb.group({
    splace: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    eplace: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    km: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });
  constructor(private fb: FormBuilder) {}

  getFare() {
    if (!this.fareForm.valid) {
      // not form filed
    } else {
      let kms: any = this.fareForm.value.km;
      this.fare = 8 * kms;
      this.isFare=false
    }
  }

  resetFare(){
    this.fareForm.reset();
    this.fare = 0;
    this.isFare=true
  }

  kmChange(){
    this.isFare=true
  }
}
