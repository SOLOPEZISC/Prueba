import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = 'http://127.0.0.1:8000/api/users';
  constructor(private http: HttpClient) {

  }

  getUser(user) {
    return this.http.post(`${this.API_URI}/check`,user);
  }
  insertUser(user) {
    return this.http.post(`${this.API_URI}`,user);
  }
}