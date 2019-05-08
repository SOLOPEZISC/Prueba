import { Component, OnInit } from '@angular/core';
import { UsersModule } from '../../../models/users.module';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token: string = "";
  public user: UsersModule;
  public identificado: any;
  constructor(private _servicio: UsersService) {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.identificado = true;
    }
    this.user = new UsersModule;
  }

  onSubmit() {
    if (this.user.password && this.user.name) {
      this._servicio.getUser(this.user).subscribe(resultado => {
        let res = resultado.toString();
        if (res == 'false') {
          console.log("Error");
        } else {          
          localStorage.setItem("token",res);
          this.identificado = true;
        }
      }),
        error => {
          let msj = <any>error;
        }
    }
  }

  ngOnInit() {
  }

}
