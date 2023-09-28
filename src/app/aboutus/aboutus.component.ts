import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  toggleknow:boolean = false
  toggleread:boolean = false

  toggler1(){
    this.toggleknow=!this.toggleknow
  }

  toggler2(){
    this.toggleread=!this.toggleread
  }

}
