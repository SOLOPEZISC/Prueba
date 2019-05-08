import { Component, OnInit } from '@angular/core';
import { PermitsService } from '../../../service/permits.service'
import { PermitsModule } from '../../../models/permits.module'
@Component({
  selector: 'app-permits',
  templateUrl: './permits.component.html',
  styleUrls: ['./permits.component.css']
})
export class PermitsComponent implements OnInit {
  public permitsJson: any;
  public consulta:any;
  public hiddenid:any;
  public permits: PermitsModule;
  constructor(private _servicio: PermitsService) {
    this.permits = new PermitsModule;
    this._servicio.getPermits().subscribe(resultado => {
      this.permitsJson = resultado;
      console.log(this.permitsJson);

    }),
      error => {
        let msj = <any>error;
      }
  }
  delete(id) {
    this._servicio.deletePermits(id);
  }
  showper(id){
    this.hiddenid=id;
  }

  onSubmit() {
    if (this.permits.name && this.permits.description && this.permits.active)
      this._servicio.insertPer(this.permits).subscribe(resultado => {
        console.log(resultado);
        window.location.reload();
      }),
        error => {
          let msj = <any>error;
          console.log(error);
          ;
        }
  }

  onSubmitUpdate() {
    this._servicio.update(this.hiddenid,this.permits);
  }


  ngOnInit() {
  }

}
