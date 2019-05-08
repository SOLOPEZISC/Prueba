import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  API_URI = 'http://127.0.0.1:8000/api/profiles';
  constructor(private http: HttpClient) { }

  getProfiles(){
    return this.http.get(`${this.API_URI}`);
  }
  
}
