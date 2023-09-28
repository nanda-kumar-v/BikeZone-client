import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  driversData: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.api.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.driversData = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  deleteDriver(id: any) {
    this.api.deleteADriver(id).subscribe({
      next: (res: any) => {
        console.log(res);
        alert("Driver Application Rejected Successfully")
        this.getAllData();
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }
}
