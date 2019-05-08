import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
public viewpermits:boolean=true;
public viewprofiles:boolean=false;

  constructor() { }
  permitsFunction(){
    this.viewpermits=true; 
  }
  profilesFunction(){
    this.viewpermits=false;
this.viewprofiles=true;
  }
  usersFunction(){
    this.viewpermits=false;
    this.viewprofiles=false;
  }
  close(){
    localStorage.removeItem("token");
    window.location.reload();
  }
  ngOnInit() {
  }

}
