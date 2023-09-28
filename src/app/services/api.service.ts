import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(body: any) {
    return this.http.post(`${this.base_url}/register-driver`, body);
  }

  getData() {
    return this.http.get(`${this.base_url}/get-drivers`);
  }

  deleteADriver(id: any) {
    return this.http.delete(`${this.base_url}/delete-driver/${id}`);
  }
}
