import { Component } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent {
 toggleread:boolean =false
 
  toggle(){
    this.toggleread = !this.toggleread
  }
}
