import { Component, OnInit } from '@angular/core';
import { UsersModule } from '../../../models/users.module';
import { UsersService } from '../../../service/users.service';
import { ProfilesService } from '../../../service/profiles.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  public user: UsersModule;
  public profiles: ProfilesService;
  public profilesJson: any;
  public validacion:boolean=false;
  constructor(private _servicioUser: UsersService, private _servicioProf: ProfilesService) {
    this.user = new UsersModule;
    this._servicioProf.getProfiles().subscribe(resultado => {
      this.profilesJson = resultado;
    }),
      error => {
        let msj = <any>error;
        console.log(error);

      }
  }

  onSubmit(form: NgForm) {
    if (this.user.name && this.user.id_role && this.user.curp && this.user.rfc && this.user.password && this.user.active && this.user.nick && this.user.first_name && this.user.last_name) {
      this._servicioUser.insertUser(this.user).subscribe(resultado => {
        this.validacion=true;
        form.reset();
      }),
        error => {
          let msj = <any>error;
          alert("Plase ");
        }
    }
  }
  ngOnInit() {
  }

}
