import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  myUrl = 'http://localhost:3000/restaurants';
  rootUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getList() {
    return this.http.get(this.myUrl);
  }
  saveResto(data) {
    return this.http.post(this.myUrl, data);
  }
  deleteResto(id) {
    return this.http.delete(`${this.myUrl}/${id}`);
  }
  getCurrentResto(id) {
    return this.http.get(`${this.myUrl}/${id}`);
  }
  updateResto(id, data) {
    return this.http.put(`${this.myUrl}/${id}`, data);
  }
  registerUser(data) {
    return this.http.post(this.rootUrl + 'users', data);
  }
}
