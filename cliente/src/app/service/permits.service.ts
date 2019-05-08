import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermitsService {
  API_URI = 'http://127.0.0.1:8000/api/permit';
  constructor(private http: HttpClient) { }

  getPermits() {
    return this.http.get(`${this.API_URI}`)
  }
  deletePermits(id){
    this.http.delete(`${this.API_URI}/${id}`).subscribe(res=>{
      console.log(res);
      window.location.reload();
    }),err=>{
      let msj=<any> err;
      console.log(msj);
    }
  }
update(id,data){
  this.http.put(`${this.API_URI}/${id}`,data).subscribe(res=>{
    console.log(res);
    window.location.reload();
  }),err=>{
    let msj=<any> err;
    console.log(msj);
  }
}

  insertPer(per){
    return this.http.post(`${this.API_URI}`,per);
  }
}
